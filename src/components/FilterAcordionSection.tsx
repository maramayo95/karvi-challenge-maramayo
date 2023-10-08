import React from "react";
import Accordion from "./Acordion";
import { FilterAcordionProps } from "../interface/types";

const FilterAcordionSection: React.FC<FilterAcordionProps> = ({
  accordionFilters,
  onFilterToggle: filterToggleHandler,
  selectedFilters,
  availableFilters,
}) => {
  return (
    <aside className="px-5 py-3 md:max-w-[25%] md:w-full relative">
      <section className="absolute w-full max-w-[calc(100%-40px)]">
        {accordionFilters.map(({ type, title }) => (
          <Accordion
            key={title}
            options={availableFilters ? availableFilters[type] : []}
            category={title}
            onSelectionUpdate={(selectedOptions) =>
              filterToggleHandler(selectedOptions, type)
            }
            selectedOptions={selectedFilters[type]}
          />
        ))}
      </section>
    </aside>
  );
};

export default FilterAcordionSection;
