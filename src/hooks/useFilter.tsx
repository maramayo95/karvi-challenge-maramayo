import { useState } from "react";
import { FilterSelection } from "../interface/types";

const useFilter = () => {
  type FilterKey = keyof FilterSelection;
  const [selectedFilters, setSelectedFilters] = useState<FilterSelection>({
    city: [],
    brand: [],
    version: [],
    model: [],
    year: [],
  });

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
  const handlerDeleteFilter = (filterKey: FilterKey, filterId: string) => {
    setSelectedFilters((prevState) => {
      const newState = { ...prevState };
      newState[filterKey] = prevState[filterKey].filter((f) => f !== filterId);
      return newState;
    });
  };

  const handleDeleteAll = () => {
    setSelectedFilters({
      city: [],
      brand: [],
      version: [],
      model: [],
      year: [],
    });
  };

  const filterToggleHandler = (
    selectedOptions: string[],
    filter: "city" | "brand" | "version" | "model" | "year"
  ) => {
    setSelectedFilters((prevState) => {
      const newState = { ...prevState };
      newState[filter] = selectedOptions;
      return newState;
    });
  };
   const isFiltersEmpty = Object.values(selectedFilters).every((filterValues) => filterValues.length === 0);


  return {
    handlerDeleteFilter,
    handleDeleteAll,
    filterToggleHandler,
    accordionFilters,
    selectedFilters,
    isFiltersEmpty
  };
};

export default useFilter;
