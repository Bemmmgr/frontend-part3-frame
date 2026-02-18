import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import AppNav from "../components/AppNav";

function Homepage() {
  return (
    <div>
      {/* 17005 - link between routes with Link & NavLink */}
      <PageNav />
      <AppNav />

      <h1 className="test">WorldWise</h1>

      {/* <a href="/pricing">Pricing</a> */}
      <Link to="/app">Go to the App</Link>
    </div>
  );
}

export default Homepage;
