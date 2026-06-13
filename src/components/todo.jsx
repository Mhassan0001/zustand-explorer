import { useState, useEffect } from "react";
import useTodoStore from "../stores/todoStore";
import useAuthStore from "../stores/useAuthStore";
import { Link } from "react-router-dom";
import { MdOutlineLogout } from "react-icons/md";

const Todo = () => {
  const [input, setInput] = useState("");
  const { isLoading, error, tasks, createTask, getTask } = useTodoStore();
  const { user,logout } = useAuthStore();

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
        <p onClick={logout}><MdOutlineLogout/></p>
        <h1 className="text-right ml-auto pr-10 text-[20px] pt-5"> Hi! <span className="font-bold">{user.firstName}</span>  👋</h1>
        <h1 className="text-center text-[35px] uppercase tracking-[6px] py-5">
          Today's Goals!
        </h1>

        {/* Form */}
        <form
          onSubmit={onSubmit}
          className="flex flex-col items-center w-full max-w-md mt-4"
        >
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            className="border-purple-700 rounded-2xl custom border w-full px-4 py-2"
            placeholder="Enter Your Task Here...."
          />

          <div className="flex gap-3 mt-3">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-blue-900 rounded-2xl tracking-wide px-4 py-2 text-amber-50 cursor-pointer"
            >
              {isLoading ? "Creating..." : "Add Your Task"}
            </button>

            <Link
              to="/"
              className="bg-purple-900 rounded-2xl px-4 py-2 text-white tracking-wide inline-block"
            >
              Redirect
            </Link>
          </div>
        </form>

        {/* Task List */}
        <div className="w-full max-w-md mt-3">
          {error && <p className="text-red-500 py-4 text-center">{error}</p>}
          <ul className="space-y-3">
            {tasks.map((task) => (
              <li
                key={task._id}
                className="bg-pink-400 text-white rounded-2xl px-10 py-2 w-fit mx-auto"
              >
                {task.task}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Todo;
