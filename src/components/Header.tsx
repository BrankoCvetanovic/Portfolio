import { NavLink, useLocation } from "react-router-dom";
import profilePic from "../asets/ss.jpg";

export default function Header() {
  const location = useLocation();
  console.log(location);
  return (
    <div className="header">
      <NavLink className="pic-container" to={"/"}>
        <img className="prof-pic" src={profilePic} alt="" />
      </NavLink>
      <div className="links">
        {location.pathname != "/" ? <NavLink to={"/"}>Home</NavLink> : null}
        {location.pathname != "/about" ? (
          <NavLink to={"/about"}>About</NavLink>
        ) : null}
        {location.pathname != "/projects" ? (
          <NavLink to={"/projects"}>Projects</NavLink>
        ) : null}
        {location.pathname != "/contact" ? (
          <NavLink to={"/contact"}>Contact</NavLink>
        ) : null}
      </div>
    </div>
  );
}
