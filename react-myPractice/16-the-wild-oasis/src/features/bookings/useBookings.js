import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";

export function useBookings() {
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings"],
    // query func: responsible for actual querying: fetch data from api
    queryFn: getBookings,
  });

  return { isLoading, bookings, error };
}
