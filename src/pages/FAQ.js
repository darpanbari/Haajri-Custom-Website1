import React from "react";
import SideNavbar from "../components/SideNavbar";
import Table from "react-bootstrap/Table";
import { MdEditSquare, MdDelete } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import SearchBtn from "../components/SearchBtn";
import AdminProfileLogout from "../components/AdminProfileLogout";
import HeaderMessageBox from "../components/HeaderMessageBox";
import LanguageBtn from "../components/LanguageBtn";

const FAQ = () => {
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
            <div className="py-4 ms-4">
              <h5>Manage FAQ</h5>
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
                      FAQ
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
                <AiOutlinePlus />
              </span>
            </div>
          </div>

          <div className=" border-4 py-5 mx-4 rounded-3 custom-shadow bg-custom-white">
            <div className="d-flex justify-content-between pb-4 px-4">
              <div className="d-flex align-items-center">
                <select className="p-2 me-2">
                  <option value="">No.</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
                <h6>entries per page</h6>
              </div>
              <div>
                <SearchBtn />
              </div>
            </div>
            <Table hover>
              <thead>
                <tr className="table-head">
                  <th className="px-5 fw-bold">#</th>
                  <th className="pe-5">TITLE</th>
                  <th>DESCRIPTION</th>
                  <th className="text-center">ACTION</th>
                </tr>
              </thead>
              <tbody className="y-center">
                <tr>
                  <td className="text-center fw-bold" style={{ width: "70px" }}>
                    1
                  </td>
                  <td style={{ maxWidth: "80px" }}>What is TicketGo?</td>
                  <td style={{ maxWidth: "120px" }}>
                    TicketGo helps you to manage the formal request or inquiries
                    submitted by a customer or user to seek assistance or
                    resolution for an issue or problem related to a product or
                    service.
                  </td>
                  <td className="text-center">
                    <div className="mx-2">
                      <span
                        type="button"
                        className="px-2 pt-2 pb-1 fs-6 bg-info text-white rounded-3 me-3"
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
                  </td>
                </tr>
                <tr>
                  <td className="text-center fw-bold">2</td>
                  <td style={{ maxWidth: "80px" }}>
                    How do I create a support ticket?
                  </td>
                  <td style={{ maxWidth: "120px" }}>
                    <div>
                      To create a support ticket, navigate to the designated
                      support ticket system or platfor m and provide essential
                      details such as your name, contact information, a
                      description of the issue, and any relevant attachments or
                      screenshots.
                    </div>
                  </td>
                  <td className="text-center">
                    <div className="mx-2">
                      <span
                        type="button"
                        className="px-2 pt-2 pb-1 fs-6 bg-info text-white rounded-3 me-3"
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
                  </td>
                </tr>
                <tr>
                  <td className="text-center fw-bold">3</td>
                  <td style={{ maxWidth: "80px" }}>
                    How long does it take to receive a response to a support
                    ticket?
                  </td>
                  <td style={{ maxWidth: "120px" }}>
                    The response time for support tickets may vary depending on
                    the specific company o r service provider. Typically, the
                    goal is to provide a prompt response within a specifie d
                    timeframe, such as 24 hours or one business day.
                  </td>
                  <td className="text-center">
                    <div className="mx-2">
                      <span
                        type="button"
                        className="px-2 pt-2 pb-1 fs-6 bg-info text-white rounded-3 me-3"
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
                  </td>
                </tr>
                <tr>
                  <td className="text-center fw-bold">4</td>
                  <td style={{ maxWidth: "80px" }}>
                    What information should I include when submitting a support
                    ticket?
                  </td>
                  <td style={{ maxWidth: "120px" }}>
                    When submitting a support ticket, it's important to include
                    clear and detailed informa tion about the issue you are
                    facing. Be sure to provide any relevant error messages, s
                    teps to reproduce the problem, and any additional
                    information that can assist the su pport team in resolving
                    the issue effectively.
                  </td>
                  <td className="text-center">
                    <div className="mx-2">
                      <span
                        type="button"
                        className="px-2 pt-2 pb-1 fs-6 bg-info text-white rounded-3 me-3"
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
                  </td>
                </tr>
              </tbody>
            </Table>
            <h6 className="p-4">Showing 1 to 4 of 4 entries</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
