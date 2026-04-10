import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

export function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    // query func: responsible for actual querying: fetch data from api
    queryFn: getCabins,
  });

  return { isLoading, cabins, error };
}
