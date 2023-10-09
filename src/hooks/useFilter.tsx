import { useEffect, useState } from "react";
import { FetchData, FilterSelection, Item } from "../interface/types";

const useFilter = (data?: FetchData) => {
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
  const isFiltersEmpty = Object.values(selectedFilters).every(
    (filterValues) => filterValues.length === 0
  );

  const [filteredItems, setFilteredItems] = useState<Item[]>([]);

  useEffect(() => {
    const checkFilteredItems = data?.items.filter((car) => {
      console.log(selectedFilters.year, car.year);
      return (
        (!selectedFilters.city.length ||
          selectedFilters.city.includes(car.city)) &&
        (!selectedFilters.brand.length ||
          selectedFilters.brand.includes(car.brand)) &&
        (!selectedFilters.version.length ||
          selectedFilters.version.includes(car.version)) &&
        (!selectedFilters.model.length ||
          selectedFilters.model.includes(car.model)) &&
        (!selectedFilters.year.length ||
          car.year
            .split("/")
            .some((carYear) => selectedFilters.year.includes(carYear)))
      );
    });
    setFilteredItems(checkFilteredItems ?? []);
  }, [data, selectedFilters]);

  return {
    handlerDeleteFilter,
    handleDeleteAll,
    filterToggleHandler,
    accordionFilters,
    selectedFilters,
    isFiltersEmpty,
    filteredItems,
  };
};

export default useFilter;
