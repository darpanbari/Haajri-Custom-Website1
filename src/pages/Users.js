import React, { useState } from "react";
import SideNavbar from "../components/SideNavbar";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@material-ui/core";
import { MdDelete, MdEditSquare } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { RiKey2Fill } from "react-icons/ri";
import { KeyboardArrowUp, KeyboardArrowDown } from "@material-ui/icons";
import SearchBtn from "../components/SearchBtn";
import AdminProfileLogout from "../components/AdminProfileLogout";
import LanguageBtn from "../components/LanguageBtn";
import HeaderMessageBox from "../components/HeaderMessageBox";

const Users = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Agent",
      email: "agent@example.com",
      category: ["Support", "Questions", "Bug"],
      role: "Agent",
    },
    {
      id: 2,
      name: "Virginia Wilkerson",
      email: "xiriqyhy@mailinator.com",
      category: ["Support", "New Installation"],
      role: "Agent",
    },
    {
      id: 3,
      name: "Cyrus Bailey",
      email: "sakinecig@mailinator.com",
      category: ["Support", "Bug"],
      role: "Agent",
    },
    {
      id: 4,
      name: "Jayme Keller",
      email: "tety@mallinator.com",
      category: ["Support", "Questions", "New Installation"],
      role: "Agent",
    },
    {
      id: 5,
      name: "Derek Rollins",
      email: "xiwisero@mallinator.com",
      category: ["Questions"],
      role: "Agent",
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
            <div className="mt-4 mb-0 ms-4">
              <h5>Manage Users</h5>
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
                      Users
                    </li>
                  </ol>
                </nav>
              </p>
            </div>

            <div className="mt-4 mb-0 me-5">
              <span
                type="button"
                className="px-2 pt-2 pb-1 fs-6 green-2 text-white rounded-2 ms-2 me-1"
              >
                <AiOutlinePlus />
              </span>
            </div>
          </div>

          <div className=" border-4 py-4 m-4 rounded-3 custom-shadow bg-custom-white">
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
              <div>
                <SearchBtn />
              </div>
            </div>

            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow className="table-head">
                    <TableCell className="px-4 fw-bold text-center">
                      <TableSortLabel
                        active={orderBy === "id"}
                        direction={order}
                        onClick={() => handleSort("id")}
                      >
                        #
                        {orderBy === "id" ? (
                          <span>
                            {order === "asc" ? (
                              <KeyboardArrowUp />
                            ) : (
                              <KeyboardArrowDown />
                            )}
                          </span>
                        ) : null}
                      </TableSortLabel>
                    </TableCell>
                    <TableCell>
                      <TableSortLabel
                        active={orderBy === "name"}
                        direction={order}
                        onClick={() => handleSort("name")}
                      >
                        PICTURE
                        {orderBy === "name" ? (
                          <span>
                            {order === "asc" ? (
                              <KeyboardArrowUp />
                            ) : (
                              <KeyboardArrowDown />
                            )}
                          </span>
                        ) : null}
                      </TableSortLabel>
                    </TableCell>
                    <TableCell>
                      <TableSortLabel
                        active={orderBy === "name"}
                        direction={order}
                        onClick={() => handleSort("name")}
                      >
                        NAME
                        {orderBy === "name" ? (
                          <span>
                            {order === "asc" ? (
                              <KeyboardArrowUp />
                            ) : (
                              <KeyboardArrowDown />
                            )}
                          </span>
                        ) : null}
                      </TableSortLabel>
                    </TableCell>
                    <TableCell>
                      <TableSortLabel
                        active={orderBy === "email"}
                        direction={order}
                        onClick={() => handleSort("email")}
                      >
                        EMAIL
                        {orderBy === "email" ? (
                          <span>
                            {order === "asc" ? (
                              <KeyboardArrowUp />
                            ) : (
                              <KeyboardArrowDown />
                            )}
                          </span>
                        ) : null}
                      </TableSortLabel>
                    </TableCell>
                    <TableCell>
                      <TableSortLabel
                        active={orderBy === "category"}
                        direction={order}
                        onClick={() => handleSort("category")}
                      >
                        CATEGORY
                        {orderBy === "category" ? (
                          <span>
                            {order === "asc" ? (
                              <KeyboardArrowUp />
                            ) : (
                              <KeyboardArrowDown />
                            )}
                          </span>
                        ) : null}
                      </TableSortLabel>
                    </TableCell>
                    <TableCell>
                      <TableSortLabel
                        active={orderBy === "role"}
                        direction={order}
                        onClick={() => handleSort("role")}
                      >
                        ROLE
                        {orderBy === "role" ? (
                          <span>
                            {order === "asc" ? (
                              <KeyboardArrowUp />
                            ) : (
                              <KeyboardArrowDown />
                            )}
                          </span>
                        ) : null}
                      </TableSortLabel>
                    </TableCell>
                    <TableCell className="text-center pe-5">ACTION</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.slice(0, entriesPerPage).map((row) => (
                    <TableRow key={row.id}>
                      <TableCell className="text-center fw-bold">
                        {row.id}
                      </TableCell>
                      <TableCell>
                        <div
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
                      </TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.email}</TableCell>
                      <TableCell>
                        <div className=" me-5">
                          {row.category.map((category) => (
                            <button
                              key={category}
                              className={`btn btn-success pt-1 border-0 btn-width mx-1 ${
                                category === "Questions"
                                  ? "navy-2"
                                  : category === "Bug"
                                  ? "red-2"
                                  : category === "Support"
                                  ? "black-2"
                                  : category === "New Installation"
                                  ? "green-3"
                                  : "green-2"
                              }`}
                            >
                              {category}
                            </button>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        <button
                          className="btn green-2 text-white pt-1 px-0 border-0 px-3 agent"
                          style={{
                            background: "#6FD943 !important",
                            borderRadius: "13px",
                          }}
                        >
                          {row.role}
                        </button>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="mx-2">
                          <span
                            type="button"
                            className="px-2 pt-2 pb-1 fs-6 bg-warning text-white rounded-3 me-2"
                          >
                            <RiKey2Fill />
                          </span>
                          <span
                            type="button"
                            className="px-2 pt-2 pb-1 fs-6 bg-info text-white rounded-3 me-2"
                          >
                            <MdEditSquare />
                          </span>
                          <span
                            type="button"
                            className="px-2 pt-2 pb-1 fs-6 rounded-3 text-white red-icon"
                          >
                            <MdDelete />
                          </span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <p className="p-4">
                Showing 1 to {Math.min(entriesPerPage, data.length)} of{" "}
                {data.length} entries
              </p>
            </TableContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
