import React from "react";
import { FilterSelection, MobileModalProps } from "../interface/types";
import Accordion from "./Acordion";
import CloseAll from "./CloseAll";
import Close from "../icons/Close";
import ButtonFilter from "./ButtonFilter";

const MobileModal: React.FC<MobileModalProps> = ({
  filterToggleHandler,
  selectedFilters,
  data,
  handleDeleteAll,
  handlerDeleteFilter,
  isModalOpen,
  closeModal,

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
  type FilterKey = keyof FilterSelection;

  return (
    <div>
      {isModalOpen && (
        <div className=" inset-0 flex items-center justify-center z-50 overflow-y-auto">
          <div className="w-full h-full bg-white flex items-center justify-center">
            <div className="bg-white  p-4 w-11/12 md:w-1/2 max-w-md rounded-lg ">
              <div className="flex justify-between w-full items-center border-b-[1px] py-3  ">
                <h2 className="text-2xl font-bold ">Filtros</h2>
                <div className="flex gap-2">
                  <CloseAll title="Limpiar" onDeleteAll={handleDeleteAll}/>
                  <button className="px-2 " onClick={closeModal}><Close color="#87899C" width="25" height="25" /></button>
                </div>
              </div>
              <div className=" flex flex-wrap mt-5  gap-2 ">
                
                {Object.keys(selectedFilters)
                      .map((filterKey) => filterKey as FilterKey)
                      .map((filterKey) =>
                        selectedFilters[filterKey].map((filterId) => (
                          <div key={filterId}>
                            {" "}
                            <ButtonFilter
                              id={filterId}
                              onDeleteFilter={() =>
                                handlerDeleteFilter(filterKey, filterId)
                              }
                            />
                          </div>
                        ))
                      )}
              </div>
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileModal;
