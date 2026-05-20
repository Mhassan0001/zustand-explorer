import { useState } from "react";
import useTodoStore from "../stores/todoStore";
import { Link } from "react-router-dom";

const Todo = () => {
  const [input, setInput] = useState("");
  const { isLoading, error, tasks, createTask } = useTodoStore();

  const onSubmit = async (e) => {
    e.preventDefault();
    await createTask(input);
    setInput("");
  };
  return (
    <>
      <div className="bg-bieg-500 h-screen ">
        <form onSubmit={onSubmit}>
          <div className="field pt-5">
            <input
              type="text"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              className="border-purple-500 border"
            />

            <button
              type="submit"
              disabled={isLoading}
              className="bg-amber-400 "
            >
              {isLoading ? "Creating..." : "Add Your Task"}
            </button>
          </div>
        </form>

        <ul>
          {tasks.map((task) => (
            <li key={task._id}>{task.task}</li>
          ))}
        </ul>

     
        <Link to="/">Counter</Link>
      </div>
    </>
  );
};

export default Todo;
