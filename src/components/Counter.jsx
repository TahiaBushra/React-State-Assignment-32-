import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleDelete = (value) => {
    count - value < 0 ? null : setCount(count - value);
  };

  const handleAdd = (value) => {
    count + value > 50 ? null : setCount(count + value);
  };

  return (
    <div className="container justify-center items-center text-center p-10 antialiased">
      <p className="py-3 text-2xl font-semibold">Count: {count}</p>
      <div className="flex items-center justify-center text-center gap-5 font-semibold">
        <button
          onClick={() => handleDelete(5)}
          className="bg-black text-white px-5 py-2 rounded-3xl hover:bg-red-500 transition duration-300 ease-in-out"
        >
          -5
        </button>
        <button
          onClick={() => handleDelete(1)}
          className="bg-black text-white px-5 py-2 rounded-3xl hover:bg-red-500 transition duration-300 ease-in-out"
        >
          Delete
        </button>
        <button
          onClick={() => handleAdd(1)}
          className="bg-black text-white px-5 py-2 rounded-3xl hover:bg-emerald-500 transition duration-300 ease-in-out"
        >
          Add
        </button>
        <button
          onClick={() => handleAdd(5)}
          className="bg-black text-white px-5 py-2 rounded-3xl hover:bg-emerald-500 transition duration-300 ease-in-out"
        >
          +5
        </button>
      </div>
    </div>
  );
};

export default Counter;
