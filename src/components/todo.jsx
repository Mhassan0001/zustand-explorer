import { useState } from "react";
import useTodoStore from "../stores/todoStore";

const todo = () => {
  const [input, setInput] = useState("");
  const { isLoading, error, tasks } = useTodoStore;
  return (
    <>
      <div className="bg-black h-screen ">
        <h1 className="text-purple-900">hi</h1>
      </div>
    </>
  );
};

export default todo;
