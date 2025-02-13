import { v4 as uuidv4 } from "uuid";
import CommonModal from "../common/CommonModal";
import ExpenseForm from "./ExpenseForm";
import useExpenseStore from "../../store/expense";

const AddExpenseModal = ({ open, onClose }) => {
  const { addExpense } = useExpenseStore();

  const handleSubmit = (formData) => {
    addExpense({ id: uuidv4(), ...formData });
    onClose();
  };

  return (
    <CommonModal open={open} title="New Expense" onClose={onClose}>
      <ExpenseForm onSubmit={handleSubmit} />
    </CommonModal>
  );
};

export default AddExpenseModal;
