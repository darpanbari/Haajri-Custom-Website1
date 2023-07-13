import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { TbWorld } from "react-icons/tb";

const LanguageBtn = () => {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle
          id="dropdown-basic"
          className="d-flex border-0 dropdown-color"
          style={{
            background: "#ffffff !important",
            padding: "8px 15px 1px 15px",
          }}
        >
          <span
            type="button"
            className="fs-5 pb-0"
            style={{ color: "#CFD8E4" }}
          >
            <TbWorld />
          </span>
          <div className="ps-2 green-1"> English</div>
        </Dropdown.Toggle>

        <Dropdown.Menu className="custom-shadow my-2">
          <Dropdown.Item href="#Profile">Hindi</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Marathi</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default LanguageBtn;
