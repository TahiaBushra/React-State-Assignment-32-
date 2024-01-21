import { useState } from "react";

const Form = () => {
  const [users, setUsers] = useState([]);
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [lang, setLang] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !address || !dateOfBirth || !lang) {
      alert("Please fill all the properties");
      return null;
    }
    const newUser = { fullName, address, dateOfBirth, lang };
    setUsers([...users, newUser]);
    setFullName("");
    setAddress("");
    setDateOfBirth("");
    setLang("");
  };

  return (
    <div className="min-h-screen w-full grid grid-cols-2 gap-10">
      <form
        onSubmit={handleSubmit}
        className="w-[70%] h-[80%] mx-auto my-24 p-4 bg-stone-100 shadow-md rounded-md"
      >
        <h2 className="text-2xl font-semibold text-center">
          Enter User Details
        </h2>
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-sm cursor-pointer font-semibold text-gray-800"
          >
            Fullname
          </label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
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
            value={address}
            onChange={(e) => setAddress(e.target.value)}
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
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
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
            value={lang}
            onChange={(e) => setLang(e.target.value)}
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
      <div class="user_list p-20 flex flex-col gap-5">
        <h2 class="text-2xl font-semibold text-center">Users List</h2>
        <div class="flex flex-col gap-2.5">
          <div class="bg-white p-4 rounded shadow-md">
            {users.length > 0 &&
              users.map((user, index) => (
                <div key={index + user.fullName}>
                  <h3 class="text-xl font-semibold">{user.fullName}</h3>
                  <p class="text-gray-600">Address: {user.address}</p>
                  <p class="text-gray-600">
                    Date Of Birth: {new Date(user.dateOfBirth).toDateString()}
                  </p>
                  <p class="text-gray-600">Language: {user.lang}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
