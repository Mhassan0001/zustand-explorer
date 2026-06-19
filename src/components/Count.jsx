import useCounterStore from "../stores/counterStore";
import useAuthStore from "../stores/useAuthStore";
import { IoMdAdd } from "react-icons/io";
import { IoMdRemove } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";

const Count = () => {
  const { reset, count, increment, decrement } = useCounterStore();
  const { user ,isLoading } = useAuthStore;
  if (isLoading) {
    return <p className="text-center text-xl text-red-400">Loading user...</p>;
  }
  return (
    <>
      <div className="grid grid-cols-10 h-screen px-10  bg-black ">
        <h1 className="text-white">{user?.firstName}</h1>
        <div
          className="col-span-1 cursor-pointer grid justify-items-center items-center  "
          onClick={increment}
        >
          <IoMdAdd color="white" size={70} />
        </div>

        <div className="col-span-8 text-green-500  grid justify-items-center items-center text-[15rem] ">
          <div className="">{count}</div>
        </div>

        <div
          className="col-span-1 cursor-pointer grid justify-items-center items-center"
          onClick={decrement}
        >
          <IoMdRemove color="white" size={70} />
        </div>

        <div className="grid col-span-10 place-items-center">
          <div
            className="text-[1rem] place-items-center  cursor-pointer"
            onClick={reset}
          >
            <MdDeleteForever color="green" size={35} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Count;
