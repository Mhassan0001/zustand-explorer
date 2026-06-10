import useCounterStore from "../stores/counterStore";
import useTodoStore from "../stores/todoStore";
import useAuthStore from "../stores/useAuthStore";
import { Link } from "react-router-dom";

const Counter = () => {
  const { count, increment, decrement, reset } = useCounterStore();

  const { tasks } = useTodoStore();
  const { user, isLoading } = useAuthStore();
  console.log("Counter tasks:", tasks);

  if (isLoading) {
    return <p className="text-center text-xl text-red-400">Loading user...</p>;
  }
  return (
    <>
      <p className="text-center text-[20px]">{user?.firstName}</p>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      <div className="bg-amber-400">
        <p>Todo Data Here.........</p>
        <ul>
          {tasks.map((task) => (
            <li key={task._id}> {task.task}</li>
          ))}
        </ul>
      </div>
      <Link to="/todo">Todo</Link>
    </>
  );
};

export default Counter;
