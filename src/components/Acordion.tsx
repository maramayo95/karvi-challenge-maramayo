import { useState, useEffect } from "react";
// import { AvailableFilters, Categories } from "../interface/types";
function Accordion(props: {
  category: string;
  options: { id: string; name: string; count: number }[];
  onToggle: (selectedOptions: string[]) => unknown;
}) {
  const {onToggle} = props
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
     onToggle(selectedOptions)

  }, [onToggle,selectedOptions]);

  const onOptionToggle = (id: string) => {
    setSelectedOptions((prevState) => {
      const isSelected = prevState.includes(id);
      if (isSelected) {
        return prevState.filter((option) => option !== id);
      } else {
        return [...prevState, id];
      }
    });
  };

  

  return (
    <div className="max-w-md mx-auto mt-4">
      <div className="border-b-[1px] border-borderAccordeon  ">
        <div
          className="flex items-center justify-between py-5 cursor-pointer"
          onClick={toggleAccordion}
        >
          <h2 className="text-base font-bold">{props.category}</h2>
          <svg
            className={`w-6 h-6 transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
            />
          </svg>
        </div>
        {isOpen && (
          <div className="py-5 border-b-[1px]">
            {props.options.map((option) => (
              <div key={option.id} onClick={() => onOptionToggle(option.id)}>
                <p className="text-gray-700">
                  {option.name} <span> ({option.count})</span>
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
