import { useEffect, useMemo, useState } from "react";
import sum from "lodash/sum";
import orderBy from "lodash/orderBy";
import useExpenseStore from "../../../store/expense";
import CommonFilter from "../../common/CommonFilter";
import formatNum from "format-num";
import { addDays, format, isBefore } from "date-fns";

const DailyExpenses = () => {
  const { expenses } = useExpenseStore();
  const [filter, setFilter] = useState();

  const filteredExpenses = useMemo(() => {
    let fExpenses = [...expenses];

    const dates = !filter ? [format(new Date(), "yyyy-MM-dd")] : [];

    if (filter?.startDate && filter?.endDate) {
      let currDate = new Date(filter.startDate);

      dates.push(filter.startDate);

      while (isBefore(currDate, new Date(filter.endDate))) {
        currDate = addDays(currDate, 1);
        dates.push(format(currDate, "yyyy-MM-dd"));
      }
    }

    fExpenses = fExpenses.filter((e) => dates.includes(e.date));

    if ((filter?.description || "").trim()) {
      fExpenses = fExpenses.filter((e) =>
        e.description
          .toLowerCase()
          .includes(filter.description.trim().toLowerCase())
      );
    }

    return fExpenses;
  }, [expenses, filter]);

  const handleFilter = (filter) => {
    setFilter(filter);
  };

  return (
    <div>
      <CommonFilter type="date" onFilter={handleFilter} />
      <table className="mt-6 w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-1 text-sm w-[30px]">#</th>
            <th className="border w-[150px] p-1 text-sm">Date</th>
            <th className="border text-sm">Description</th>
            <th className="border w-[150px] text-sm">Amount</th>
          </tr>
        </thead>
        <tbody>
          {orderBy(filteredExpenses, "date", "asc").map((expense, index) => (
            <tr key={expense.id}>
              <td className="border text-center text-sm">{index + 1}</td>
              <td className="border py-1 px-2 text-sm">{expense.date}</td>
              <td className="border py-1 px-2 text-sm">
                {expense.description}
              </td>
              <td className="border py-1 px-2 text-sm text-right">
                ₱{formatNum(Number(expense.amount), { minFraction: 2 })}
              </td>
            </tr>
          ))}
          <tr>
            <td />
            <td />
            <td />
            <td className="text-right p-2 text-sm">
              ₱
              {formatNum(
                Number(sum(filteredExpenses.map((e) => Number(e.amount))))
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DailyExpenses;
