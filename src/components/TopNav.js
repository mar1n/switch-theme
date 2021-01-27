import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./TopNav.css";

const TopNav = () => {
  const [open, setOpen] = useState(false);
  const openMenu = () => setOpen(!open);
  return (
    <>
      <nav>
        <Icon open={open} openMenu={openMenu} />
        <div onClick={openMenu} className={`menu-container ${open ? "open-container" : ""}`}>
          <NavLink exact={true} activeStyle={{ fontWeight: "bold", color: "#b31d26" }} to="/">Home</NavLink>
          <NavLink activeStyle={{ fontWeight: "bold", color: "#b31d26" }} to="/skills">Skills</NavLink>
          <NavLink activeStyle={{ fontWeight: "bold", color: "#b31d26" }} to="/powerby">Power By</NavLink>
        </div>
      </nav>
    </>
  );
};

const Icon = ({ openMenu, open }) => {
  return (
    <div
      className={`menu-icon ${open ? "menu-icon-open" : ""}`}
      onClick={openMenu}
    ></div>
  );
};

export default TopNav;
