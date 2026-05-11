import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";

// 29011 -
export function useBooking() {
  const { bookingId } = useParams();

  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking", bookingId],
    // query func: responsible for actual querying: fetch data from api
    queryFn: () => getBooking(bookingId),
    retry: false,
  });

  return { isLoading, booking, error };
}
