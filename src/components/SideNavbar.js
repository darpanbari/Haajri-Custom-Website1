import React from "react";
import { NavLink } from "react-router-dom";
import { RiQuestionLine } from "react-icons/ri";
import { TbTicket, TbSettings } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { BiHomeSmile } from "react-icons/bi";
import "../styles/SideNavbar.css";

const SideNavbar = () => {
  return (
    <div className="sidebar fixed-top">
      <div className="green-1 fs-2 mb-5 text-center fw-bold ps-4 logo">
        H A A J R I
      </div>
      <ul className="nav-links">
        <li>
          <NavLink
            exact
            to="/dashboard"
            activeClassName="active"
            className="nav-item"
          >
            <BiHomeSmile className="nav-icon" />
            <span className="nav-name">Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" activeClassName="active" className="nav-item">
            <FiUsers className="nav-icon" />
            <span className="nav-name">Users</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/tickets" activeClassName="active" className="nav-item">
            <TbTicket className="nav-icon" />
            <span className="nav-name">Tickets</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/faq" activeClassName="active" className="nav-item">
            <RiQuestionLine className="nav-icon" />
            <span className="nav-name">FAQ</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" activeClassName="active" className="nav-item">
            <TbSettings className="nav-icon" />
            <span className="nav-name">Settings</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideNavbar;
