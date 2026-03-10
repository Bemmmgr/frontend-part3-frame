import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
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
