import {
  addDays,
  eachWeekOfInterval,
  endOfMonth,
  format,
  isBefore,
  startOfMonth,
} from "date-fns";
import { useState } from "react";

import CommonFilter from "../../common/CommonFilter";
import CommonTable from "../../common/CommonTable";
import useExpenseStore from "../../../store/expense";
import sum from "lodash/sum";
import formatNum from "format-num";

const WeeklyReport = () => {
  const { expenses } = useExpenseStore();

  const getTotalExpenses = (startOfWeek) => {
    const dates = [];

    let currDate = new Date(startOfWeek);

    dates.push(startOfWeek);

    while (isBefore(currDate, addDays(new Date(startOfWeek), 6))) {
      currDate = addDays(currDate, 1);
      dates.push(format(currDate, "yyyy-MM-dd"));
    }

    const fExpenses = [...expenses].filter((e) => dates.includes(e.date));

    return sum(fExpenses.map((e) => Number(e.amount)));
  };

  const [weeks, setWeeks] = useState(
    eachWeekOfInterval(
      {
        start: startOfMonth(new Date()),
        end: endOfMonth(new Date()),
      },
      { weekStartsOn: 1 }
    ).map((date) => format(date, "yyyy-MM-dd"))
  );

  const handleFilter = (filter) => {
    setWeeks(
      eachWeekOfInterval(
        {
          start: startOfMonth(new Date(filter.startDate)),
          end: endOfMonth(new Date(filter.endDate)),
        },
        { weekStartsOn: 1 }
      ).map((date) => format(date, "yyyy-MM-dd"))
    );
  };

  return (
    <div>
      <CommonFilter type="month" onFilter={handleFilter} hideSearch />
      <CommonTable
        className="mt-6"
        heads={[
          { label: "Week", width: 60 },
          { label: "Range" },
          { label: "Total", width: 200 },
        ]}
        cols={[
          {
            key: "week",
            className: "text-center",
            render: (data, index) => index + 1,
          },
          {
            key: "range",
            className: "text-center",
            render: (data) =>
              `${data} - ${format(addDays(new Date(data), 6), "yyyy-MM-dd")}`,
          },
          {
            key: "total",
            className: "text-center",
            render: (data) =>
              `₱${formatNum(getTotalExpenses(data), { minFraction: 2 })}`,
          },
        ]}
        data={weeks}
      />
    </div>
  );
};

export default WeeklyReport;
