import { useState } from "react";
import Row from "../ui/Row";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import CabinTable from "../features/cabins/CabinTable";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
// import { useEffect } from "react";
// import { getCabins } from "../services/apiCabins";

function Cabins() {
  /* manually fetching data
  useEffect(function () {
    getCabins().then((data) => console.log(data));
  }, []);
  */
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>

      <Row>
        <CabinTable />

        {/* introduce pre-created form - 27008 */}
        <Button onClick={() => setShowForm((show) => !show)}>
          Add new cabin
        </Button>
        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
