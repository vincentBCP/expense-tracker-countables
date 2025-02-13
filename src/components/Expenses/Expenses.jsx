import CommonTabs from "../common/CommonTabs";
import DailyExpenses from "./DailyExpenses/DailyExpenses";
import WeeklyReport from "./WeeklyReport";

const Expenses = () => {
  return (
    <CommonTabs
      tabs={[
        { label: "Expenses", content: <DailyExpenses /> },
        { label: "Weekly Report", content: <WeeklyReport /> },
      ]}
    />
  );
};

export default Expenses;
