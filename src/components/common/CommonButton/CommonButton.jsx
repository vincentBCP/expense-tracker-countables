import clsx from "clsx";

const CommonButton = ({
  children,
  variant = "info" /* info, success, etc. */,
  onClick,
  className = "",
}) => {
  return (
    <button
      className={clsx(
        `text-sm rounded-md px-2 py-1 cursor-pointer border duration-300 flex items-center gap-1 ${className}`,
        {
          "bg-blue-300 border-blue-400 active:bg-blue-400": variant === "info",
          "bg-green-300 border-green-400 active:bg-green-400":
            variant === "success",
        }
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CommonButton;
