import { useState } from "react";
import CommonButton from "../../common/CommonButton";
import CommonInput from "../../common/CommonInput/CommonInput";

const ExpenseForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    // date
    if (!formData.date) {
      errors["date"] = "Required";
    }

    // description
    if (!formData.description) {
      errors["description"] = "Required";
    } else if (formData.description && !formData.description.trim()) {
      errors["description"] = "Invalid description";
    }

    // amount
    if (formData.amount === undefined || formData.amount === null) {
      errors["amount"] = "Required";
    } else if (isNaN(Number(formData.amount))) {
      errors["amount"] = "Invalid amount";
    } else if (Number(formData.amount) < 0) {
      errors["amount"] = "Invalid amount";
    }

    setErrors({ ...errors });

    return Object.keys(errors).length < 1;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <CommonInput
        label="Date"
        type="date"
        required
        value={formData.date}
        onChange={(val) => setFormData((data) => ({ ...data, date: val }))}
        errorMsg={errors.date}
      />
      <CommonInput
        label="Description"
        required
        value={formData.description}
        onChange={(val) =>
          setFormData((data) => ({ ...data, description: val }))
        }
        errorMsg={errors.description}
      />
      <CommonInput
        label="Amount"
        type="number"
        min="0"
        required
        value={formData.amount}
        onChange={(val) => setFormData((data) => ({ ...data, amount: val }))}
        errorMsg={errors.amount}
      />
      <CommonButton variant="success" className="self-end">
        Submit
      </CommonButton>
    </form>
  );
};

export default ExpenseForm;
