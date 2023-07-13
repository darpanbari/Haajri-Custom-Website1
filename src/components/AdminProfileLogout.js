import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const AdminProfileLogout = () => {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle
          id="dropdown-basic"
          className="d-flex dropdown-color"
          style={{ background: "#ffffff !important" }}
        >
          <div
            className="my-auto"
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <img
              src="user1.png"
              alt="img"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="ps-2"> Hi, Admin</div>
        </Dropdown.Toggle>

        <Dropdown.Menu className="custom-shadow my-2">
          <Dropdown.Item href="/users/profile">Profile</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default AdminProfileLogout;
