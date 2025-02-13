import { useState } from "react";
import CommonSearchInput from "../CommonSearchInput";
import CommonInput from "../CommonInput/CommonInput";
import CommonButton from "../CommonButton";
import { format, isBefore } from "date-fns";

const CommonFilter = ({ type = "date" /* date | month */, hideSearch }) => {
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
      console.log(filter);
    }
  };

  return (
    <div className="flex gap-2">
      {!hideSearch && (
        <CommonSearchInput
          placeholder="Search by description..."
          value={filter.description}
          onChange={(val) =>
            setFilter((filter) => ({ ...filter, description: val }))
          }
        />
      )}
      <CommonInput
        label="Start Date"
        type={type}
        value={filter.startDate}
        max={format(new Date(), type === "month" ? "yyyy-MM" : "yyyy-MM-dd")}
        onChange={(val) =>
          setFilter((filter) => ({ ...filter, startDate: val }))
        }
        className="ml-auto"
      />
      <CommonInput
        label="End Date"
        type={type}
        value={filter.endDate}
        max={format(new Date(), type === "month" ? "yyyy-MM" : "yyyy-MM-dd")}
        onChange={(val) => setFilter((filter) => ({ ...filter, endDate: val }))}
      />
      <CommonButton variant="info" className="self-end" onClick={handleSearch}>
        Search
      </CommonButton>
    </div>
  );
};

export default CommonFilter;
