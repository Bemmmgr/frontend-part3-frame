import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  // 29006 - API side Filtering booking
  const [searchParams] = useSearchParams();

  // Filter
  const filtervalue = searchParams.get("status");
  const filter =
    !filtervalue || filtervalue === "all"
      ? null
      : { field: "status", value: filtervalue };
  // { field: "totalPrice", value: 5000, method: "gte" };

  // Sort Api-side sorting bookings - 29007
  const soryByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = soryByRaw.split("-");
  const sortBy = { field, direction };

  // PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // QUERY
  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    // query func: responsible for actual querying: fetch data from api
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  return { isLoading, bookings, error, count };
}
