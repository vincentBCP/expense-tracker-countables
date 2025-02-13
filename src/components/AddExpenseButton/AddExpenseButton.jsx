const AddExpenseButton = ({ className = "", onClick }) => {
  const classNames = [
    "text-sm rounded-md px-2 py-1 cursor-pointer bg-blue-300 border border-blue-400",
    "duration-300 active:bg-blue-400",
  ];

  return (
    <button
      className={`${classNames.join(" ")} ${className}`}
      onClick={onClick}
    >
      Add Expense
    </button>
  );
};

export default AddExpenseButton;
