const Foods = ({ foodName }) => {
  const isPizza = foodName === "Pizza";
  return (
    <div
      className={`${
        isPizza ? "bg-red-300" : "bg-cyan-200"
      } p-10 text-center font-semibold text-2xl`}
    >
      <p style={{ color: isPizza ? "red" : "violet" }}>
        My favourite {isPizza ? "junk food" : "dessert"} is {foodName}.
      </p>
    </div>
  );
};

export default Foods;
