import { NavLink } from "react-router-dom";
import './navbar.css'

const Navbar = () => (
  <ul>
    {pages.map((page, index) => (
      <li key={index}>
        <NavLink to={page.url} className={({isActive})=>(isActive?"active":"")}>
          {page.text}
        </NavLink>
      </li>
    ))}
  </ul>
);

const pages = [
  { text: "Home", url: "/" },
  { text: "About", url: "/about" },
  { text: "Users", url: "/users" },
  { text: "Dashboard", url: "/dashboard"}
];

export default Navbar;
