import { NavLink } from "react-router-dom";

// 17007 - using CSS modules: create one external CSS file per component
import styles from "./PageNav.module.css";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/">Homepage</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">product</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
