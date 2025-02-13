import { useState } from "react";
import CommonSearchInput from "../CommonSearchInput";
import CommonInput from "../CommonInput/CommonInput";
import CommonButton from "../CommonButton";
import { format, isBefore } from "date-fns";
import clsx from "clsx";
import Icomoon from "../Icomoon";

const CommonFilter = ({
  type = "date" /* date | month */,
  onFilter,
  hideSearch,
}) => {
  const [filter, setFilter] = useState({
    startDate: format(new Date(), type === "month" ? "yyyy-MM" : "yyyy-MM-dd"),
    endDate: format(new Date(), type === "month" ? "yyyy-MM" : "yyyy-MM-dd"),
    description: "",
  });

  const validateFilter = () => {
    if (
      !isBefore(new Date(filter.startDate), new Date(filter.endDate)) &&
      filter.startDate !== filter.endDate
    ) {
      alert("Invalid date range");
      return false;
    }

    return true;
  };

  const handleSearch = () => {
    if (validateFilter()) {
      onFilter(filter);
    }
  };

  return (
    <div
      className={clsx({
        "flex flex-col gap-2": true,
        "sm:flex-row": true,
      })}
    >
      {!hideSearch && (
        <CommonSearchInput
          placeholder="Search by description..."
          value={filter.description}
          onChange={(val) =>
            setFilter((filter) => ({ ...filter, description: val }))
          }
        />
      )}
      <div className="flex gap-2 sm:ml-auto">
        <CommonInput
          label="Start Date"
          type={type}
          value={filter.startDate}
          max={format(new Date(), type === "month" ? "yyyy-MM" : "yyyy-MM-dd")}
          onChange={(val) =>
            setFilter((filter) => ({ ...filter, startDate: val }))
          }
          className="grow-1 grow-0"
        />
        <CommonInput
          label="End Date"
          type={type}
          value={filter.endDate}
          max={format(new Date(), type === "month" ? "yyyy-MM" : "yyyy-MM-dd")}
          onChange={(val) =>
            setFilter((filter) => ({ ...filter, endDate: val }))
          }
          className="grow-1 grow-0"
        />
      </div>
      <CommonButton
        variant="info"
        className="sm:self-end"
        onClick={handleSearch}
      >
        <Icomoon icon="search" size={12} />
        Search
      </CommonButton>
    </div>
  );
};

export default CommonFilter;
