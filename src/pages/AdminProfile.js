import React, { useState } from "react";
import SideNavbar from "../components/SideNavbar";
import { Form } from "react-bootstrap";
import { GiArtificialIntelligence } from "react-icons/gi";
import AdminProfileLogout from "../components/AdminProfileLogout";
import HeaderMessageBox from "../components/HeaderMessageBox";
import LanguageBtn from "../components/LanguageBtn";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AdminProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [attachment, setAttachment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setAttachment("");
    console.log(name, email, attachment);
  };

  return (
    <>
      <div className="display-side d-flex">
        <div>
          <SideNavbar />
        </div>

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

          <div className="py-4 ms-4">
            <h5>Edit Profile (Admin)</h5>
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
                  <li className="breadcrumb-item  green-1" aria-current="page">
                    <a href="/users" className="text-decoration-none green-1">
                      Users
                    </a>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Edit
                  </li>
                </ol>
              </nav>
            </p>
          </div>
          <Form className="my-form p-5 mx-4 rounded-3 mt-3 custom-shadow bg-custom-white">
            <div className="d-flex">
              <div className="mb-3 w-50 me-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-3 w-50">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="d-flex">
              <div className="mb-3 w-50 me-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Set an account password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="mb-3 w-50">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm account password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <Row>
                <Col>
                  <div>
                    <Form.Label>Picture</Form.Label>
                    <p>
                      Please upload a valid image file. Size of image should not
                      be more than 2MB.
                    </p>
                  </div>
                  <div className="mb-3 w-75">
                    <Form.Label>Choose File Hear</Form.Label>
                    <Form.Control
                      type="file"
                      onChange={(e) => setAttachment(e.target.files[0])}
                    />
                  </div>
                </Col>
                <Col>
                  <img
                    src="/user1.png"
                    style={{ height: "150px", width: "150px" }}
                  />
                </Col>
                <Col></Col>
              </Row>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default AdminProfile;
