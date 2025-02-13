import { useState } from "react";
import Icomoon from "../Icomoon";

const CommonSearchInput = ({
  placeholder,
  className = "",
  value,
  onChange,
}) => {
  return (
    <div
      className={`border border-gray-500 rounded-md flex items-center py-2 px-2 self-end w-[220px] gap-1 ${className}`}
    >
      <input
        className="outline-none text-sm grow-1"
        placeholder={placeholder || "Search..."}
        value={value}
        onChange={(ev) => onChange(ev.target.value)}
      />
      {value && (
        <Icomoon
          icon="close"
          size={12}
          className="cursor-pointer"
          onClick={() => onChange("")}
        />
      )}
    </div>
  );
};

export default CommonSearchInput;
