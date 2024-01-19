import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="container justify-center items-center text-center p-10 antialiased">
      <p className="py-2 text-2xl font-semibold">Count: {count}</p>
      <div className="flex items-center justify-center text-center gap-5 font-semibold">
        <button className="bg-rose-500 text-white px-5 py-2 rounded-2xl hover:bg-red-800">
          Delete
        </button>
        <button className="bg-emerald-500 text-white px-5 py-2 rounded-2xl hover:bg-lime-300">
          Add
        </button>
      </div>
    </div>
  );
};

export default Counter;
