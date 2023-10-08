import { useState } from "react";
import "./App.css";

import useFetch from "./hooks/useFetch";

import Spinner from "./components/Spinner";
import Pagination from "./components/Paginator";
import CloseAll from "./components/CloseAll";
import useFilter from "./hooks/useFilter";
import FilterAcordionSection from "./components/FilterAcordionSection";

import MaisRevIcon from "./icons/MaisRevIcon";
import { isMobile } from "react-device-detect";
import CardViewIcon from "./icons/CardViewIcon";
import FilterMobilePage from "./components/FilterMobilePage";
import CardToggle from "./components/CardToggle";
import List from "./icons/List";
import { accordionFilters } from "./config/filterConfig";
import FilterList from "./components/FilterList";




function App() {
  const { data, isLoading, isError, error } = useFetch();
  const {
    handlerDeleteFilter,
    handleDeleteAll,
    filterToggleHandler,
    selectedFilters,
    isFiltersEmpty,
    filteredItems,
  } = useFilter(data);
  // Pagination
  const [page, setPage] = useState<number>(1);

  const [isListFormat, setIsListFormat] = useState(false);

  const itemsPerPage = 12;

  const paginatedItems = () => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredItems?.slice(startIndex, endIndex);
  };

  const itemToMap = paginatedItems();

  const toggleItemView = () => {
    setIsListFormat(!isListFormat);
  };

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
              accordionFilters={accordionFilters}
              onFilterToggle={filterToggleHandler}
              selectedFilters={selectedFilters}
              availableFilters={data?.availableFilters}
              onDeleteAll={handleDeleteAll}
              onDeleteFilter={handlerDeleteFilter}
              isFiltersEmpty={isFiltersEmpty}
            />
          ) : (
            <FilterAcordionSection
              accordionFilters={accordionFilters}
              onFilterToggle={filterToggleHandler}
              selectedFilters={selectedFilters}
              availableFilters={data?.availableFilters}
            />
          )}

          <section className="flex flex-wrap  px-5 w-full ">
            <div className="my-4 px-5 w-full">
              <section className="flex flex-wrap px-5 w-full items-start">
                {
                  !isMobile && <FilterList classNames="my-2 flex flex-wrap w-[80%] gap-2"  selectedFilters={selectedFilters} onDeleteFilter={handlerDeleteFilter}/>
                }

                {!isMobile && !isFiltersEmpty && (
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
                      {isListFormat ? <List /> : <CardViewIcon />}
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
