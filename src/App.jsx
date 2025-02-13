import AddExpenseButton from "./components/AddExpenseButton";

const App = () => {
  return (
    <div className="w-full max-w-[800px] mx-auto p-4">
      <div className="flex flex-col">
        <h1 className="text-2xl mb-8">Expense Tracker Countables</h1>
        <AddExpenseButton
          className="self-end"
          onClick={() => alert("clicked!")}
        />
      </div>
    </div>
  );
};

export default App;
