import iconSet from "./selection.json";
import IcomoonReact from "icomoon-react";

const Icomoon = ({ icon, size = 14, color = "black", className, onClick }) => {
  return (
    <IcomoonReact
      iconSet={iconSet}
      color={color}
      size={size}
      icon={icon}
      className={className}
      onClick={onClick}
    />
  );
};

export default Icomoon;
