import {  useState } from "react";
import "./App.css";
import Card from "./components/Card";
import useFetch from "./hooks/useFetch";
import Accordion from "./components/Acordion";
import Spinner from "./components/Spinner";

function App() {
  
  const filterToggleHandler = (selectedOptions:string[],filter: "cities" | "brands" | "version" | "model" | "year" ) => {
    setSelectedFilters((prevState) => {
      const newState = {...prevState}
      newState[filter] = selectedOptions
      return newState
    })
  }

  const [selectedFilters, setSelectedFilters] = useState<{
    cities: string[];
    brands: string[];
    version: string[];
    model: string[];
    year : string[];
  }>({
    cities: [],
    brands: [],
    version: [],
    model: [],
    year: []
  });

  const { data, isLoading, isError, error } = useFetch();
  if (isLoading) {
    return  <Spinner/>;
  }
  if (isError) {
    return <div>Error: {error instanceof Error}</div>;
  }


  

  return (
    <main className="m-auto w-full sm:container 2xl:max-w-screen-xl">
   
      <div className="grid grid-cols-5 min-h-screen">
        <aside className="px-5 py-3 col-span-1">
          <section>
            <Accordion 
              options={data?.availableFilters.brand ??[]}
              category={"Marca"}
              onSelectionUpdate={(selectedOptions) => filterToggleHandler(selectedOptions, 'brands')}
              selectedOptions={selectedFilters.brands}
              />
              <Accordion 
                options={data?.availableFilters.model ??[]}
                category={"Modelo"}
                onSelectionUpdate={(selectedOptions) => filterToggleHandler(selectedOptions, 'model')}
                selectedOptions={selectedFilters.model}
                />
              <Accordion 
                options={data?.availableFilters.version ??[]}
                category={"Version"}
                onSelectionUpdate={(selectedOptions) => filterToggleHandler(selectedOptions, 'version')}
                selectedOptions={selectedFilters.version}
                />
                <Accordion 
                  options={data?.availableFilters.year ??[]}
                  category={"Año"}
                  onSelectionUpdate={(selectedOptions) => filterToggleHandler(selectedOptions, 'year')}
                  selectedOptions={selectedFilters.year}
                  />
            <Accordion
              options={data?.availableFilters.city ?? []}
              category={"Cidade"}
              onSelectionUpdate={(selectedOptions) => filterToggleHandler(selectedOptions, 'cities')}
              selectedOptions={selectedFilters.cities}
            />
          </section>
        </aside>

        <section className="px-5 grid col-span-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 sm:gap-4">
          {data?.items
            .filter((car) => {
              if (
                (selectedFilters.cities.length > 0 &&
                !selectedFilters.cities.includes(car.city)) ||
               ( selectedFilters.brands.length > 0 &&
               !selectedFilters.brands.includes(car.brand)) ||
               ( selectedFilters.version.length > 0 &&
                !selectedFilters.version.includes(car.version)) ||
                ( selectedFilters.model.length > 0 &&
                  !selectedFilters.model.includes(car.model)) ||
                  ( selectedFilters.year.length > 0 &&
                    !selectedFilters.year.includes(car.year))
              ) {
                return false;
              }
              return true;
            })
            .map((car) => (
              <Card key={car.id} {...car} />
            ))}
        </section>
      </div>
    </main>
  );
}

export default App;
