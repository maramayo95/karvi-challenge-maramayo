import {  useEffect,  useState } from "react";
import "./App.css";
import Card from "./components/Card";
import useFetch from "./hooks/useFetch";
import Accordion from "./components/Acordion";
import Spinner from "./components/Spinner";
import Pagination from "./components/Paginator";
import { Item } from "./interface/types";

function App() {
  const { data, isLoading, isError, error } = useFetch();
  
  const [filteredItems, setFilteredItems] = useState<Item[] | undefined>(undefined)
  const [page, setPage] = useState<number>(1)
  const itemsPerPage = 12;

  const paginatedItems = () => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredItems?.slice(startIndex, endIndex);
  }

  const itemToMap =paginatedItems()

  const [selectedFilters, setSelectedFilters] = useState<{
    city: string[];
    brand: string[];
    version: string[];
    model: string[];
    year: string[];
  }>({
    city: [],
    brand: [],
    version: [],
    model: [],
    year: [],
  });

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

  useEffect(
    () => {
      const checkFilteredItems = data?.items
      .filter((car) => {
        return (
          (!selectedFilters.city.length || selectedFilters.city.includes(car.city)) &&
          (!selectedFilters.brand.length || selectedFilters.brand.includes(car.brand)) &&
          (!selectedFilters.version.length || selectedFilters.version.includes(car.version)) &&
          (!selectedFilters.model.length || selectedFilters.model.includes(car.model)) &&
          (!selectedFilters.year.length || selectedFilters.year.includes(car.year))
        );
      })
      setFilteredItems(checkFilteredItems)
    }, [data, selectedFilters]
  )
    console.log(selectedFilters)
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <div>Error: {error instanceof Error}</div>;
  }

  // Calcula los índices de inicio y fin para los elementos en la página actual
  const accordionFilters:{
    type: "brand" | "model" | "version" | "year" | "city";
    title:string;
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

  console.log(selectedFilters)

  //  TODO : Para el total de autos encontrados en la busqueda filtrada  Total autos :  filteredItems

  return (
    <main className="m-auto w-full sm:container 2xl:max-w-screen-xl">
      <div className="flex ">
        <aside className="px-5 py-3 max-w-[25%] w-full relative">
          <section className="absolute w-full max-w-[calc(100%-40px)]">
            {
              accordionFilters.map(({type,title}) => (
                <Accordion key={title}
                options={data?.availableFilters[type] ?? []}
                category={title}
                onSelectionUpdate={(selectedOptions) =>
                  filterToggleHandler(selectedOptions, type)
                }
                selectedOptions={selectedFilters[type]}
              />
              ))
            }
    
          </section>
        </aside>

           
        <section className="flex flex-wrap gap-4 px-5 w-full ">
          {itemToMap?.map((car) => (
              <Card key={car.id} {...car} />
            ))}
        <Pagination items={filteredItems} itemsPerPage={itemsPerPage} onPageChange={setPage} />
        </section>
      </div>
    </main>
  );
}

export default App;
