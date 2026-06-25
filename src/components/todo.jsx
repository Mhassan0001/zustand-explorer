import { useState, useEffect } from "react";
import useTodoStore from "../stores/todoStore";
import useAuthStore from "../stores/useAuthStore";
import { Link } from "react-router-dom";
import { MdOutlineLogout } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { toast } from "sonner";
const Todo = () => {
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState(null);
  const { isLoading, error, tasks, update, createTask, getTask, remove } =
    useTodoStore();
  const { user, logout } = useAuthStore();

  const handleEdit = (task) => {
    setEditId(task._id);
    setEditText(task.task);
    console.log(task._id);
    toast.info([task._id," ",task.task]);
    
  };

  const handleUpdate = async (id) => {
    await update(id, editText);
    setEditId(null);
    setEditText("");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await createTask(input);

    setInput("");
  };

  useEffect(() => {
    getTask();
  }, [getTask]);

  return (
    <>
      <div className="bg-white min-h-screen flex flex-col items-center">
        <p className="mr-auto pl-6 pt-3" onClick={logout}>
          <MdOutlineLogout size={30} />
        </p>
        <h1 className="text-right text-2xl ml-auto pr-10  pt-5">
          Hi! <span className="font-bold text-2xl capitalize text-purple-700">{user.firstName} {user.lastName }</span> 👋
        </h1>
        <h1 className="text-center text-[35px] uppercase tracking-[6px] py-5">
          Today's Goals!
        </h1>

        <form
          onSubmit={onSubmit}
          className="flex flex-col items-center w-full max-w-md mt-4"
        >
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            className="border-black rounded-2xl custom border-2  px-4 py-2"
            placeholder="Enter Your Task Here...."
          />

          <div className="flex gap-3 mt-3">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-blue-900  rounded-2xl tracking-[2px] px-4 py-2 text-amber-50 cursor-pointer"
            >
              {isLoading ? "Creating..." : "Add Your Task"}
            </button>

            <Link
              to="/count"
              className="bg-purple-900 rounded-2xl px-4 py-2 text-white tracking-[2px] inline-block"
            >
              Count
            </Link>
          </div>
        </form>

        <div className="w-full max-w-md  mt-3">
          {error && <p className="text-red-500 py-4 text-center">{error}</p>}

          <ul className="space-y-3">
            {tasks.map((task) => (
              <li key={task._id} className=" py-2 w-fit mx-auto">
                {editId === task._id ? (
                  <>
                    <input
                      type=""
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      placeholder="Enter"
                      className="bg-pink-400 px-10 py-2 text-white rounded-2xl"
                    />

                    <span className="pl-1">
                      <button
                        className="bg-green-500 cursor-pointer text-white px-3 py-2 rounded-2xl"
                        onClick={() => handleUpdate(task._id)}
                      >
                        save
                      </button>
                    </span>
                  </>
                ) : (
                  <>
                    <span className="bg-pink-400 px-10 py-2 text-white rounded-2xl">
                      {task.task}
                    </span>
                    <span className="pl-3">
                      <button
                        onClick={() => remove(task._id)}
                        className="cursor-pointer bg-red-500 text-white py-2  rounded-[10px] px-2"
                      >
                        <MdDelete />
                      </button>
                    </span>

                    <span className="pl-3">
                      <button
                        onClick={() => handleEdit(task)}
                        className="cursor-pointer bg-yellow-500 text-white py-2  rounded-[10px] px-2"
                      >
                        <MdModeEdit />
                      </button>
                    </span>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Todo;
