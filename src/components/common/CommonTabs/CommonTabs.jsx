import clsx from "clsx";
import { useState } from "react";

const CommonTabs = ({ tabs /* [{label: string, content: ReactNode}] */ }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div className="flex flex-row gap-0.5">
        {tabs.map((tab, index) => (
          <div
            key={tab.label}
            className={clsx(
              "relative border border-gray-400 border-b-0 rounded-t-md px-2 py-1 text-sm cursor-pointer bg-stone-200",
              {
                "bg-white": index === activeIndex,
                "after:content-[''] after:w-full after:h-[3px] after:bg-white after:absolute after:bottom-[-2px] after:left-0":
                  index == activeIndex,
              }
            )}
            onClick={() => setActiveIndex(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="border border-gray-400 p-4">
        {tabs[activeIndex].content}
      </div>
    </div>
  );
};

export default CommonTabs;
