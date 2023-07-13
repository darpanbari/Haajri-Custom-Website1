import React, { useState } from "react";
import SideNavbar from "../components/SideNavbar";
import Table from "react-bootstrap/Table";
import { MdDelete, MdOutlineTextsms } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { PiArrowBendUpLeftBold } from "react-icons/pi";
import { ImSearch } from "react-icons/im";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";
import { KeyboardArrowUp, KeyboardArrowDown } from "@material-ui/icons";
import SearchBtn from "../components/SearchBtn";
import AdminProfileLogout from "../components/AdminProfileLogout";
import HeaderMessageBox from "../components/HeaderMessageBox";
import LanguageBtn from "../components/LanguageBtn";

const Tickets = () => {
  const [data, setData] = useState([
    {
      id: 1234567890,
      name: "aaa",
      email: "sanjay.dahal90@gmail.com",
      category: "Bug",
      status: "New Ticket",
      priority: "Urgent",
      timing: "Response time: 43 seconds after Resolve In: 2 Hour",
      created: "2 hours ago",
    },
    {
      id: 1234567891,
      name: "John",
      email: "john@example.com",
      category: "Questions",
      status: "In Progress",
      priority: "High",
      timing: "Response time: 2 minutes after Resolve In: 2 Hour",
      created: "1 week ago",
    },
    {
      id: 1234567892,
      name: "pearl smith",
      email: "xoxigif@mailinator.com",
      category: "New Installation",
      status: "In Progress",
      priority: "Low",
      timing: "Response Overdue: 2 weeks after Resolve In: 4 Day",
      created: "1 month ago",
    },
    {
      id: 1234567893,
      name: "Nell Macdonald",
      email: "kuwexi@mailinator.com",
      category: "New Installation",
      status: "On Hold",
      priority: "Low",
      timing: "Response In: 4 Day Resolve In: 4 Day",
      created: "1 month ago",
    },
    {
      id: 1234567894,
      name: "Stuart Fitzpatrick",
      email: "jejitajar@mailinator.com",
      category: "Questions",
      status: "In Progress",
      priority: "Medium",
      timing: "Response In: 3 Hour Resolve In: 3 Hour",
      created: "1 month ago",
    },
    {
      id: 1234567895,
      name: "Emerald Colon",
      email: "fityfapimy@mailinator.com",
      category: "Bug",
      status: "On Hold",
      priority: "High",
      timing: "Response In: 2 Hour Resolve In: 2 Hour",
      created: "1 month ago",
    },
    {
      id: 1234567896,
      name: "abc",
      email: "yoxigif@mailinator.com",
      category: "Bug",
      status: "In Progress",
      priority: "Urgent",
      timing: "Response time: 43 seconds after Resolve In: 2 months",
      created: "2 months ago",
    },
  ]);

  const [orderBy, setOrderBy] = useState("");
  const [order, setOrder] = useState("asc");
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const handleSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrderBy(property);
    setOrder(isAsc ? "desc" : "asc");

    const sortedData = [...data].sort((a, b) => {
      if (isAsc) {
        return a[property] < b[property] ? -1 : 1;
      } else {
        return a[property] > b[property] ? -1 : 1;
      }
    });

    setData(sortedData);
  };

  const handleEntriesPerPage = (event) => {
    setEntriesPerPage(parseInt(event.target.value, 10));
  };

  return (
    <>
      <div className="display-side d-flex">
        <SideNavbar />

        <div className="d-flex flex-column flex-grow-1 right-container">
          {/* Top Header Start */}
          <div className="d-flex justify-content-between">
            <div className=" my-auto ms-4 p-1 d-flex ">
              <AdminProfileLogout />
            </div>

            <div className="my-3 me-5 d-flex">
              <div>
                <HeaderMessageBox />
              </div>
              <div className=" my-auto ms-4 bg-white shadow-sm custom-radius d-flex">
                <LanguageBtn />
              </div>
            </div>
          </div>
          {/* Top Header End*/}

          <div className="d-flex justify-content-between">
            <div className="my-4 ms-4">
              <h5>Manage Tickets</h5>
              <p>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a
                        href="/dashboard"
                        className="text-decoration-none green-1"
                      >
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Tickets
                    </li>
                  </ol>
                </nav>
              </p>
            </div>

            <div className="my-5 me-5">
              <span
                type="button"
                className="px-2 pt-2 pb-1 fs-6 green-2 text-white rounded-2 ms-2 me-1"
              >
                <BsFileEarmarkPlus />
              </span>
              <a href="/tickets/create">
                <span
                  type="button"
                  className="px-2 pt-2 pb-1 fs-6 green-2 text-white rounded-2 ms-2 me-1"
                >
                  <AiOutlinePlus />
                </span>
              </a>
            </div>
          </div>

          <div>
            <div className="border-4 py-4 mx-4 rounded-3 custom-shadow bg-custom-white">
              <div className="d-flex justify-content-end">
                <div className="mx-3">
                  <Form.Label>Category</Form.Label>
                  <Form.Select>
                    <option value="">Select category</option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <option value="category3">Category 3</option>
                  </Form.Select>
                </div>
                <div className="mx-3">
                  <Form.Label>Status</Form.Label>
                  <Form.Select>
                    <option value="">Select Status</option>
                    <option value="Status1">Status 1</option>
                    <option value="Status2">Status 2</option>
                    <option value="Status3">Status 3</option>
                  </Form.Select>
                </div>
                <div className="mx-3">
                  <Form.Label>Priority</Form.Label>
                  <Form.Select>
                    <option value="">Select Priority</option>
                    <option value="Priority1">Priority 1</option>
                    <option value="Priority2">Priority 2</option>
                    <option value="Priority3">Priority 3</option>
                  </Form.Select>
                </div>
                <div className="mx-2 mt-4">
                  <span
                    type="button"
                    className="px-2 pt-2 pb-1 fs-6 green-2 text-white rounded-3 ms-2 me-1"
                  >
                    <ImSearch />
                  </span>
                  <span
                    type="button"
                    className="px-2 pt-2 pb-1 fs-6 red-icon rounded-3 text-white me-4"
                  >
                    <RiDeleteBin6Fill />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="border-4 py-5 m-4 rounded-3 custom-shadow"
            style={{
              background: "#ffffff",
            }}
          >
            <div className="d-flex justify-content-between pb-4 px-4">
              <div className="d-flex align-items-center p-1">
                <label>
                  <select
                    className="dataTable-selector px-3 py-2 me-1 rounded-3 border border-1"
                    value={entriesPerPage}
                    onChange={handleEntriesPerPage}
                  >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="25">25</option>
                  </select>{" "}
                  entries per page
                </label>
              </div>
              {/* search btn */}
              <SearchBtn />
            </div>
            <Table hover>
              <thead>
                <tr className="table-head">
                  <th className="px-4" onClick={() => handleSort("id")}>
                    ID
                    {orderBy === "id" && (
                      <span>
                        {order === "asc" ? (
                          <KeyboardArrowUp />
                        ) : (
                          <KeyboardArrowDown />
                        )}
                      </span>
                    )}
                  </th>
                  <th onClick={() => handleSort("name")}>NAME</th>
                  <th onClick={() => handleSort("email")}>EMAIL</th>
                  <th onClick={() => handleSort("category")}>CATEGORY</th>
                  <th onClick={() => handleSort("status")}>STATUS</th>
                  <th onClick={() => handleSort("priority")}>PRIORITY</th>
                  <th onClick={() => handleSort("timing")}>TIMING</th>
                  <th onClick={() => handleSort("created")}>CREATED</th>
                  <th
                    className="text-center pe-5"
                    onClick={() => handleSort("action")}
                  >
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody className="y-center">
                {data.slice(0, entriesPerPage).map((ticket) => (
                  <tr key={ticket.id}>
                    <td className="text-center fw-bold">
                      <button type="button" className="btn btn-outline-success">
                        {ticket.id}
                      </button>
                    </td>
                    <td>{ticket.name}</td>
                    <td>{ticket.email}</td>
                    <td>
                      <button
                        className={`btn btn-success red-2 pt-1 border-0 btn-width ${
                          ticket.category === "Questions"
                            ? "navy-2"
                            : ticket.category === "Bug"
                            ? "red-2"
                            : ticket.category === "Support"
                            ? "black-2"
                            : ticket.category === "New Installation"
                            ? "green-3"
                            : "green-2"
                        }`}
                      >
                        {ticket.category}
                      </button>
                    </td>
                    <td>
                      <button
                        className={`btn btn-success pt-1 border-0 btn-width ${
                          ticket.status === "New Ticket"
                            ? "bg-secondary"
                            : ticket.status === "In Progress"
                            ? "sky-2"
                            : ticket.status === "On Hold"
                            ? "orange-2"
                            : "green-2"
                        }`}
                      >
                        {ticket.status}
                      </button>
                    </td>
                    <td>
                      <button
                        className={`btn btn-success pt-1 border-0 btn-width ${
                          ticket.priority === "Urgent"
                            ? "black-2"
                            : ticket.priority === "High"
                            ? "red-2"
                            : ticket.priority === "Low"
                            ? "yellow-2"
                            : ticket.priority === "Medium"
                            ? "green-3"
                            : "green-2"
                        }`}
                      >
                        {ticket.priority}
                      </button>
                    </td>
                    <td style={{ maxWidth: "200px" }}>{ticket.timing}</td>
                    <td>{ticket.created}</td>
                    <td className="text-center">
                      <div className="mx-2">
                        <span
                          type="button"
                          className="px-2 pt-2 pb-1 fs-6 bg-info text-white rounded-3 me-2"
                        >
                          <PiArrowBendUpLeftBold />
                        </span>
                        <span
                          type="button"
                          className="px-2 pt-2 pb-1 fs-6 rounded-3 text-white red-icon"
                        >
                          <MdDelete />
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <p className="p-4">
              Showing 1 to {Math.min(entriesPerPage, data.length)} of{" "}
              {data.length} entries
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tickets;
