import { useCallback, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import useFetch from "./hooks/useFetch";
import Accordion from "./components/Acordion";

function App() {
  const cityFilterToggleHandler = useCallback(
    (selectedOptions: string[]) =>
      setSelectedFilters((prevState) => ({
        ...prevState,
        cities: selectedOptions,
      })),
    []
  );

  const [selectedFilters, setSelectedFilters] = useState<{
    cities: string[];
  }>({
    cities: [],
  });

  const { data, isLoading, isError, error } = useFetch();
  if (isLoading) {
    return <div>Cargando...</div>;
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
              options={data?.availableFilters.city ?? []}
              category={"City"}
              onToggle={cityFilterToggleHandler}
            />
          </section>
        </aside>

        <section className="px-5 grid col-span-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 sm:gap-4">
          {data?.items
            .filter((car) => {
              if (
                selectedFilters.cities.length > 0 &&
                !selectedFilters.cities.includes(car.city)
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
