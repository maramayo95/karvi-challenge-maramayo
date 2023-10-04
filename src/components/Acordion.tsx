import {useState} from "react";
import Chevron from "../icons/Chevron";

function Accordion(props: {
  category: string;
  options: { id: string; name: string; count: number }[];
  onSelectionUpdate: (selectedOptions: string[]) => unknown;
  selectedOptions: string[];
}) {

  const {onSelectionUpdate, selectedOptions} = props
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

 

  const onOptionToggle = (id: string) => {
      const isSelected = selectedOptions.includes(id);
      if (isSelected) {
        onSelectionUpdate(selectedOptions.filter((option) => option !== id));
      } else {
        onSelectionUpdate([...selectedOptions, id]);
      }
  };

  console.log(isOpen)
  

  return (
    <div className="max-w-md mx-auto mt-4">
      <div className="border-b-[1px] border-borderAccordeon  ">
        <div
          className="flex items-center justify-between py-5 cursor-pointer"
          onClick={toggleAccordion}
        >
          <h2 className="text-base font-bold">{props.category}</h2>
          <Chevron isOpen={isOpen}/>
        </div>
        {isOpen && (
          <div className="py-5 border-b-[1px] cursor-pointer ">
            {props.options.map((option) => (
              <div key={option.id} onClick={() => onOptionToggle(option.id)}>
                <p className="text-optionAcc font-medium text ">
                  {option.name} <span className="text-countAcc"> ({option.count})</span>
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
