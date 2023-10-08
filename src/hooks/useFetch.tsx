import { useQuery } from "react-query";
import { FetchData } from "../interface/types";


async function fechData(): Promise<FetchData> {
  const response = await fetch(import.meta.env.VITE_URL);
  if (!response.ok) {
    throw new Error("Error al cargar los datos");
  }
  const body = (await response.json()) as {
    availableFilters: Omit<FetchData["availableFilters"], "year"> & {
      year: { id: number; name: number; count: number }[];
    };
    items: FetchData["items"];
  };

  return {
    ...body,
    availableFilters: {
      ...body.availableFilters,
      year: body.availableFilters.year.map((y) => ({
        ...y,
        id: y.id.toString(),
        name: y.name.toString(),
      })),
    },
  };
}

function useFetch() {
  return useQuery("data", fechData, {
    staleTime: Infinity,
  });
}

export default useFetch;
