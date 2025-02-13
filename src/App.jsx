import { useState } from "react";
import AddExpenseModal from "./components/AddExpenseModal/AddExpenseModal";
import CommonButton from "./components/common/CommonButton";
import Expenses from "./components/Expenses";
import Icomoon from "./components/common/Icomoon";

const App = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="w-full max-w-[800px] mx-auto p-4 sm:p-10 bg-green-300 min-h-screen">
        <div className="flex flex-col">
          <h1 className="text-2xl mb-6">Expense Tracker Countables</h1>
          <CommonButton
            className="self-end mb-8"
            onClick={() => setOpenModal(true)}
          >
            <Icomoon icon="add_icon" size={10} />
            Add Expense
          </CommonButton>
          <Expenses />
        </div>
      </div>
      <AddExpenseModal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
};

export default App;
