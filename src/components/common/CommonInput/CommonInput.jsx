import clsx from "clsx";

const CommonInput = ({
  label,
  type = "text",
  className = "",
  value = "",
  onChange,
  errorMsg,
  ...rest
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label className="text-sm mb-1">{label}</label>
      <input
        type={type}
        className={clsx("rounded-md outline-none py-1 px-2 text-sm border", {
          "border-gray-300 focus:border-black": !errorMsg,
          "border-red-500": errorMsg,
        })}
        value={value}
        onChange={(ev) => onChange(ev.target.value)}
        {...rest}
      />
      {errorMsg && <span className="text-xs text-red-500">{errorMsg}</span>}
    </div>
  );
};

export default CommonInput;
