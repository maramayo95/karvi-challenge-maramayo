import { useQuery } from "react-query";
import { Car } from "../interface/types";

async function fechData(): Promise<{
  availableFilters: {
    city: {
      id: string;
      name: string;
      count: number;
    }[];
  };
  items:Car[]
}> {
  const response = await fetch(import.meta.env.VITE_URL);
  if (!response.ok) {
    throw new Error("Error al cargar los datos");
  }
  return response.json();
}

function useFetch() {
  return useQuery("data", fechData, {
    staleTime: Infinity,
  });
}

export default useFetch;
