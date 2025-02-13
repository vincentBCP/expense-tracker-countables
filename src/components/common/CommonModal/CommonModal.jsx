import Icomoon from "../Icomoon";

const CommonModal = ({ open, title, children, onClose }) => {
  if (!open) return null;

  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.3)] px-4">
      <div className="rounded-md bg-white w-full max-w-[400px] mx-auto mt-16 animate-slide-in shadow-xl">
        <div className="p-3 border-b border-gray-200 flex items-center justify-between">
          <span>{title}</span>
          <Icomoon icon="close" className="cursor-pointer" onClick={onClose} />
        </div>
        <div className="px-3 py-4">{children}</div>
      </div>
    </div>
  );
};

export default CommonModal;
