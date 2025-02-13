import { useEffect, useMemo, useState } from "react";
import sum from "lodash/sum";
import orderBy from "lodash/orderBy";
import useExpenseStore from "../../../store/expense";
import CommonFilter from "../../common/CommonFilter";
import formatNum from "format-num";
import { addDays, format, isBefore } from "date-fns";
import CommonTable from "../../common/CommonTable";

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
      <CommonTable
        numbered
        className="mt-6"
        heads={[
          { label: "Date", width: 150 },
          { label: "Description" },
          { label: "Amount", width: 150 },
        ]}
        cols={[
          { key: "date" },
          { key: "description" },
          {
            key: "amount",
            className: "text-right",
            render: (data) =>
              `₱${formatNum(Number(data.amount), { minFraction: 2 })}`,
          },
        ]}
        data={filteredExpenses}
      />
      <p className="text-sm text-right pr-2 mt-2">
        ₱
        {formatNum(Number(sum(filteredExpenses.map((e) => Number(e.amount)))), {
          minFraction: 2,
        })}
      </p>
    </div>
  );
};

export default DailyExpenses;
