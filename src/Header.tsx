import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <img src="" alt="" />
      <div className="links">
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/projects"}>Projects</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </div>
    </div>
  );
}
