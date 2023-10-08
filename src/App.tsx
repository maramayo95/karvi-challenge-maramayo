import { useEffect, useState } from "react";
import "./App.css";

import useFetch from "./hooks/useFetch";

import Spinner from "./components/Spinner";
import Pagination from "./components/Paginator";
import { Item } from "./interface/types";
import ButtonFilter from "./components/ButtonFilter";
import CloseAll from "./components/CloseAll";
import useFilter from "./hooks/useFilter";
import FilterAcordionSection from "./components/FilterAcordionSection";
// import Card from "./components/Card";
import MaisRevIcon from "./icons/MaisRevIcon";
import { isMobile } from "react-device-detect";
import CardViewIcon from "./icons/CardViewIcon";
import FilterMobilePage from "./components/FilterMobilePage";
import CardToggle from "./components/CardToggle";
import List from "./icons/List";

type FilterSelection = {
  city: string[];
  brand: string[];
  version: string[];
  model: string[];
  year: string[];
};

type FilterKey = keyof FilterSelection;

function App() {
  const { data, isLoading, isError, error } = useFetch();
  const {
    handlerDeleteFilter,
    handleDeleteAll,
    filterToggleHandler,
    selectedFilters,
  } = useFilter();
  // Pagination
  const [filteredItems, setFilteredItems] = useState<Item[] | undefined>(
    undefined
  );
  const [page, setPage] = useState<number>(1);
  
  const [isListFormat, setListFormat] = useState(false)
  
  const itemsPerPage = 12;

  const paginatedItems = () => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredItems?.slice(startIndex, endIndex);
  };

  const itemToMap = paginatedItems();

  const toggleItemView = () => {
      setListFormat(!isListFormat);
  }

  useEffect(() => {
    const checkFilteredItems = data?.items.filter((car) => {
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
          selectedFilters.year.includes(car.year))
      );
    });
    setFilteredItems(checkFilteredItems);
  }, [data, selectedFilters]);

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <div>Error: {error instanceof Error}</div>;
  }

  return (
    <>
      <main className="m-auto w-full sm:container 2xl:max-w-screen-xl">
        <div className="flex flex-col md:flex-row ">
          {isMobile ? (
            <FilterMobilePage
              filterToggleHandler={filterToggleHandler}
              selectedFilters={selectedFilters}
              data={data}
              handleDeleteAll={handleDeleteAll}
              handlerDeleteFilter={handlerDeleteFilter}
   
            />
          ) : (
            <FilterAcordionSection
              filterToggleHandler={filterToggleHandler}
              selectedFilters={selectedFilters}
              data={data}
            />
          )}

          <section className="flex flex-wrap  px-5 w-full ">
            <div className="my-4 px-5 w-full">
              <section className="flex flex-wrap px-5 w-full items-start">
                <div className="my-2 flex flex-wrap w-[80%] gap-2">
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
                {!isMobile && (
                  <div className="ml-auto">
                    <CloseAll
                      title="Limpiar Filtros"
                      onDeleteAll={handleDeleteAll}
                    />
                  </div>
                )}
              </section>

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <h3 className="text-descriptionCard font-bold">
                    {filteredItems?.length} carros encontrados
                  </h3>
                </div>
                <div className="flex items-center text-buttonFilterFont text-sm px-2 cursor-pointer">
                  {isMobile ? (
                    <button onClick={toggleItemView}>
                     {isListFormat? <List/> : <CardViewIcon />}
                    </button>
                  ) : (
                    <>
                      <button>
                        <MaisRevIcon />
                      </button>
                      <span className="ml-1">Mais Relevantes</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className=" flex flex-col justify-center md:flex-row  md:flex-wrap md:gap-4 md:px-5 md:w-full">
              {itemToMap?.map((car) => (
                <CardToggle isListFormat={isListFormat} key={car.id} {...car} />
              ))}
            </div>

            {!isMobile && (
              <Pagination
                items={filteredItems}
                itemsPerPage={itemsPerPage}
                onPageChange={setPage}
              />
            )}
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
