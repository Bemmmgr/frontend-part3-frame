import Header from "./Header";
import Loader from "./Loader";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";

function AppLayout() {
  // 22008 - displaying a loading indicator
  const navigation = useNavigation();
  // console.log(navigation);
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      {isLoading && <Loader />}

      <Header />

      <main>
        {/* outlet render nested route(children) */}
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
