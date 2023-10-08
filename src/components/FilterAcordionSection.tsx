import React from "react";
import Accordion from "./Acordion";
import { FilterAcordionProps } from "../interface/types";

const FilterAcordionSection: React.FC<FilterAcordionProps> = ({
  filterToggleHandler,
  selectedFilters,
  data,
}) => {
  const accordionFilters: {
    type: "brand" | "model" | "version" | "year" | "city";
    title: string;
  }[] = [
    {
      type: "brand",
      title: "Marca",
    },
    {
      type: "model",
      title: "Modelo",
    },
    {
      type: "version",
      title: "Versión",
    },
    {
      type: "year",
      title: "Año",
    },
    {
      type: "city",
      title: "Ciudade",
    },
  ];

  return (
    <aside className="px-5 py-3 md:max-w-[25%] md:w-full relative">
      <section className="absolute w-full max-w-[calc(100%-40px)]">
        {accordionFilters.map(({ type, title }) => (
          <Accordion
            key={title}
            options={data?.availableFilters[type] ?? []}
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
