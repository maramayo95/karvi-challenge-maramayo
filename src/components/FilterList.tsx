import React from "react";
import ButtonFilter from "./ButtonFilter";
import { FilterKey } from "../interface/types";

interface FilterListProps {
  selectedFilters: Record<FilterKey, string[]>;
  onDeleteFilter: (filterKey: FilterKey, filterId: string) => void;
  classNames:string
}

const FilterList: React.FC<FilterListProps> = ({
  selectedFilters,
  onDeleteFilter: handlerDeleteFilter,
  classNames
}) => {
  return (
    <div className={classNames}>
      {Object.keys(selectedFilters)
        .map((filterKey) => filterKey as FilterKey)
        .map((filterKey) =>
          selectedFilters[filterKey].map((filterId) => (
            <div key={filterId}>
              {" "}
              <ButtonFilter
                id={filterId}
                onDeleteFilter={() => handlerDeleteFilter(filterKey, filterId)}
              />
            </div>
          ))
        )}
    </div>
  );
};

export default FilterList;
