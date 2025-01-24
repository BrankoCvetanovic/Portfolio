import { NavLink } from "react-router-dom";
import profilePic from "../asets/ss.jpg";

export default function Header() {
  return (
    <div className="header">
      <NavLink className="pic-container" to={"/"}>
        <img className="prof-pic" src={profilePic} alt="" />
      </NavLink>
      <div className="links">
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/projects"}>Projects</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </div>
    </div>
  );
}
