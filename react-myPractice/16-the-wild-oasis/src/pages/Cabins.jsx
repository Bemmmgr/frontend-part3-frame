import Row from "../ui/Row";
import Heading from "../ui/Heading";
import CabinTable from "../features/cabins/CabinTable";
// import { useEffect } from "react";
// import { getCabins } from "../services/apiCabins";

function Cabins() {
  /* manually fetching data
  useEffect(function () {
    getCabins().then((data) => console.log(data));
  }, []);
  */

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>

      <Row>
        <CabinTable />
      </Row>
    </>
  );
}

export default Cabins;
