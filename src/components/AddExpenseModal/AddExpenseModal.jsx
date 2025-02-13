import CommonModal from "../common/CommonModal";
import ExpenseForm from "./ExpenseForm";

const AddExpenseModal = ({ open, onClose }) => {
  const handleSubmit = (formData) => {
    console.log(formData);
    onClose();
  };

  return (
    <CommonModal open={open} title="New Expense" onClose={onClose}>
      <ExpenseForm onSubmit={handleSubmit} />
    </CommonModal>
  );
};

export default AddExpenseModal;
