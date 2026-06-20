import useCounterStore from "../stores/counterStore";
import useAuthStore from "../stores/useAuthStore";
import { IoMdAdd } from "react-icons/io";
import { IoMdRemove } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";

const Count = () => {
  const { reset, count, increment, decrement } = useCounterStore();
  const { user, isLoading } = useAuthStore();
  if (isLoading) {
    return <p className="text-center text-xl text-red-400">Loading user...</p>;
  }
  return (
    <>
      <p className="text-white bg-black tracking-[2px] text-end capitalize pr-10 pt-4 text-2xl h-custom select-none">
        Hi!{" "}
        <span className="font-bold">
          {" "}
          {user?.firstName} {user?.lastName}
        </span>{" "}
        👋
      </p>


      <div className="grid grid-cols-2 bg-black text-white">

      </div>

      <div className="grid grid-cols-3   h-screen px-10  bg-black ">
        <div
          className="col-span-1  cursor-pointer grid justify-items-center items-center  "
          onClick={increment}
        >
          <IoMdAdd color="white" size={70} />
        </div>

        <div className="col-span-1  text-green-500  grid place-items-center text-[15rem] select-none">
          <div className="">{count}</div>
        </div>

        <div
          className="col-span-1 cursor-pointer grid justify-items-center items-center"
          onClick={decrement}
        >
          <IoMdRemove color="white" size={70} />
        </div>

        <div className="row-start-2 h-2 col-start-2 grid  place-items-center">
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
