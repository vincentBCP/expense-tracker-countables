import { useState } from "react";
import AddExpenseModal from "./components/AddExpenseModal/AddExpenseModal";
import CommonButton from "./components/common/CommonButton";

const App = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="w-full max-w-[800px] mx-auto p-4">
      <div className="flex flex-col">
        <h1 className="text-2xl mb-8">Expense Tracker Countables</h1>
        <CommonButton className="self-end" onClick={() => setOpenModal(true)}>
          Add Expense
        </CommonButton>
        <AddExpenseModal open={openModal} onClose={() => setOpenModal(false)} />
      </div>
    </div>
  );
};

export default App;
