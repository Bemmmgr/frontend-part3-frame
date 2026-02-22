import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  // 17016 - prommatic navigation with useNavigates
  const navigate = useNavigate();

  // 17015 - reading and searching a query string
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>Map</h1>
      <h1>
        position:{lat}, {lng}
      </h1>

      <button
        onClick={() => {
          setSearchParams({ lat: 23, lng: 50 });
        }}
      >
        Change position
      </button>
    </div>
  );
}

export default Map;
