import { useState } from "react";

export const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const handleSubmitTodo = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    console.log(todo)
  }
  return (
    <form onSubmit={handleSubmitTodo} className="space-x-1">
      <input
        className="bg-white border-gray-400 rounded-md p-2 w-[300px] text-black"
        type="text"
        placeholder="Write Your Todos"
        value={todo}
        onChange={(e)=> setTodo(e.target.value)}
      />
      <button className=" bg-cyan-800 px-4 py-2 rounded-md font-medium cursor-pointer">
        Add
      </button>
    </form>
  );
};
