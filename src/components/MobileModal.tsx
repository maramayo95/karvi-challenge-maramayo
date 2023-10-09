import React from "react";
import { MobileModalProps } from "../interface/types";
import Accordion from "./Acordion";
import CloseAll from "./CloseAll";
import Close from "../icons/Close";
import FilterList from "./FilterList";

const MobileModal: React.FC<MobileModalProps> = ({
  accordionFilters,
  onFilterToggle: filterToggleHandler,
  selectedFilters,
  availableFilters,
  onDeleteAll: handleDeleteAll,
  onDeleteFilter: handlerDeleteFilter,
  isModalOpen,
  onCloseModal: closeModal,
  isFiltersEmpty,
}) => {
  return (
    <div className="h-[100vh]">
      {isModalOpen && (
        <div className=" inset-0 flex items-center justify-center z-50 overflow-y-auto">
          <div className="w-full h-full bg-white flex items-center justify-center">
            <div className=" overflow-y-scroll max-h-[100vh] bg-white  p-4 w-11/12 md:w-1/2 max-w-md rounded-lg ">
              <div className="flex justify-between w-full items-center border-b-[1px] py-3  ">
                <h2 className="text-2xl font-bold ">Filtros</h2>

                <div className="flex gap-2">
                  {!isFiltersEmpty && (
                    <CloseAll title="Limpiar" onDeleteAll={handleDeleteAll} />
                  )}
                  <button className="px-2 " onClick={closeModal}>
                    <Close color="#87899C" width="25" height="25" />
                  </button>
                </div>
              </div>
              <FilterList
                classNames="flex flex-wrap mt-5  gap-2 "
                selectedFilters={selectedFilters}
                onDeleteFilter={handlerDeleteFilter}
              />

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
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileModal;
