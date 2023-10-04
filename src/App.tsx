import { useCallback, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import useFetch from "./hooks/useFetch";
import Accordion from "./components/Acordion";
import Spinner from "./components/Spinner";

function App() {
  const cityFilterToggleHandler = useCallback(
    (selectedOptions: string[]) =>
      setSelectedFilters((prevState) => ({
        ...prevState,
        cities: selectedOptions,
      })),
    []
  );
  const brandFilterToggleHandler = useCallback(
    (selectedOptions: string[]) =>
      setSelectedFilters((prevState) => ({
        ...prevState,
        brands: selectedOptions,
      })),
    []
  );
  const versionFilterToggleHandler = useCallback(
    (selectedOptions: string[]) =>
      setSelectedFilters((prevState) => ({
        ...prevState,
        version: selectedOptions,
      })),
    []
  );

  const [selectedFilters, setSelectedFilters] = useState<{
    cities: string[];
    brands: string[];
  }>({
    cities: [],
    brands: []
  });

  const { data, isLoading, isError, error } = useFetch();
  if (isLoading) {
    return  <Spinner/>;
  }
  if (isError) {
    return <div>Error: {error instanceof Error}</div>;
  }

  console.log(selectedFilters)

  

  return (
    <main className="m-auto w-full sm:container 2xl:max-w-screen-xl">
   
      <div className="grid grid-cols-5 min-h-screen">
        <aside className="px-5 py-3 col-span-1">
          <section>
            <Accordion
              options={data?.availableFilters.city ?? []}
              category={"City"}
              onToggle={cityFilterToggleHandler}
            />
            <Accordion 
              options={data?.availableFilters.brand ??[]}
              category={"Marca"}
              onToggle={brandFilterToggleHandler}/>
            <Accordion 
              options={data?.availableFilters.version ??[]}
              category={"Version"}
              onToggle={versionFilterToggleHandler}/>
          </section>
        </aside>

        <section className="px-5 grid col-span-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 sm:gap-4">
          {data?.items
            .filter((car) => {
              if (
                selectedFilters.cities.length > 0 &&
                !selectedFilters.cities.includes(car.city) &&
                selectedFilters.brands.length > 0 &&
               !selectedFilters.brands.includes(car.brand)
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
