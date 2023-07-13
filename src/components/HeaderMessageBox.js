import React from "react";
import { MdOutlineTextsms } from "react-icons/md";
import Badge from "react-bootstrap/Badge";

const HeaderMessageBox = () => {
  return (
    <div>
      <span
        type="button"
        className="fs-5 bg-white shadow-sm green-1 custom-radius ms-2 me position-relative"
        style={{ padding: "8px 12px 1px 12px" }}
      >
        <MdOutlineTextsms />
        <Badge
          className="text-center rounded-5 position-absolute start-100 translate-middle"
          bg="danger"
          style={{ top: "8px", right: "-22px", fontSize: "12px" }}
        >
          0
        </Badge>
      </span>
    </div>
  );
};

export default HeaderMessageBox;
