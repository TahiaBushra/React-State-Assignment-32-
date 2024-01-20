import { useState } from "react";

const Form = () => {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [lang, setLang] = useState("");
  return (
    <form className="max-w-md mx-auto my-32 p-4 bg-stone-100 shadow-md rounded-md">
      <h2 className="text-2xl font-semibold text-center">Enter User Details</h2>
      <div className="mb-4">
        <label
          htmlFor="fullName"
          className="block text-sm cursor-pointer font-semibold text-gray-800"
        >
          Fullname
        </label>
        <input
          type="text"
          id="fullName"
          placeholder="Robert Downey Jr."
          className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-sky-300"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="address"
          className="block text-sm cursor-pointer font-semibold text-gray-800"
        >
          Address
        </label>
        <input
          type="text"
          id="address"
          placeholder="47/3 White Chapel Street, Manchester"
          className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-sky-300"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="dateOfBirth"
          className="block text-sm cursor-pointer font-semibold text-gray-800"
        >
          Date Of Birth
        </label>
        <input
          type="datetime-local"
          id="dateOfBirth"
          className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-sky-300"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="lang"
          className="block text-sm cursor-pointer font-semibold text-gray-800"
        >
          Programming Language
        </label>
        <input
          type="text"
          id="fullName"
          placeholder="JavaScript"
          className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-sky-300"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-sky-300 focus:outline-none focus:shadow-outline-blue font-semibold transition duration-300 ease-in-out"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
