import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TopNav.css";

const TopNav = () => {
  const [open, setOpen] = useState(false);
  const openMenu = () => setOpen(!open);
  return (
    <>
      <nav>
        <Icon open={open} openMenu={openMenu} />
        <div onClick={openMenu} className={`menu-container ${open ? "open-container" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/powerby">Power By</Link>
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
