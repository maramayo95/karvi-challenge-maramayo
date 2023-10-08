import React from "react";
import { FilterMobilePageProps } from "../interface/types";
import MobileModal from "./MobileModal";
import ButtonFilterMobile from "./ButtonFilterMobile";
import Search from "../icons/Search";
import FilterIcon from "../icons/FilterIcon";
import useModal from "../hooks/useModal";

const FilterMobilePage: React.FC<FilterMobilePageProps> = ({
  accordionFilters,
  onFilterToggle: filterToggleHandler,
  selectedFilters,
  availableFilters,
  onDeleteAll: handleDeleteAll,
  onDeleteFilter: handlerDeleteFilter,
  isFiltersEmpty,
}) => {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <section className="sticky top-0 bg-white py-4 z-50">
      <div className="flex justify-evenly mt-6 ">
        <ButtonFilterMobile
          icon={<Search />}
          text="Buscar"
          onClick={() => {
            console.log("Hello");
          }}
        />
        <ButtonFilterMobile
          icon={<FilterIcon />}
          text="Filtrar"
          onClick={openModal}
        />
      </div>

      {isModalOpen && (
        <MobileModal
          accordionFilters={accordionFilters}
          onFilterToggle={filterToggleHandler}
          selectedFilters={selectedFilters}
          availableFilters={availableFilters}
          onDeleteAll={handleDeleteAll}
          onDeleteFilter={handlerDeleteFilter}
          isModalOpen={isModalOpen}
          onCloseModal={closeModal}
          isFiltersEmpty={isFiltersEmpty}
        />
      )}
    </section>
  );
};

export default FilterMobilePage;
