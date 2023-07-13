import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    console.log(email, password);
  };

  return (
    <>
      <div className=" position-relative">
        <div className="d-flex justify-content-center align-items-center">
          <Navbar
            collapseOnSelect
            expand="lg"
            className="bg-white w-75 mx-auto position-absolute rounded-3 px-3"
            style={{
              top: "5%",
              boxShadow: "0 6px 30px rgba(182, 186, 203, 0.3)",
            }}
          >
            <Navbar.Brand
              href="#home"
              className="green-1 fw-bold fs-3 ps-4 logo pe-2 pb-0 mb-2"
            >
              H A A J R I
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link href="/dashboard" className="my-auto fw-bold">
                  Create Ticket
                </Nav.Link>
                <Nav.Link href="/faq" className="my-auto green-1">
                  FAQ
                </Nav.Link>
                <Nav.Link href="#" className="my-auto green-1">
                  Knowledge
                </Nav.Link>
                <Nav.Link href="#" className="my-auto green-1">
                  Search Ticket
                </Nav.Link>
                <NavDropdown
                  title="English"
                  className="m-0 green-2 px-5 py-1"
                  id="collasible-nav-dropdown"
                  style={{ color: "white !important" }}
                >
                  <NavDropdown.Item href="#action/3.1">Hindi</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Marathi
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>

        <div style={{ overflow: "hidden" }}>
          <Row className="p-0 m-0" style={{ background: "#F9FBFA" }}>
            {/* left container */}
            <Col
              className="d-flex flex-column justify-content-center p-0"
              lg={{ span: 6 }}
              md={{ span: 12 }}
              style={{ height: "100vh", overflowY: "auto" }}
            >
              <Form
                className="mx-auto"
                style={{ width: "40%" }}
                onSubmit={handleLogin}
              >
                <h3>Login</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Form.Text className="text-muted pt-2">
                    Forgot password?
                  </Form.Text>
                </Form.Group>

                <Button variant="primary green-2 w-100 border-0" type="submit">
                  Login
                </Button>
                <div className="d-flex my-3">
                  <Button
                    className="me-2"
                    variant="primary green-2 w-50 border-0"
                    type="submit"
                  >
                    Admin Login
                  </Button>
                  <Button
                    className="ms-2"
                    variant="primary green-2 w-50 border-0"
                    type="submit"
                  >
                    Agent Login
                  </Button>
                </div>
              </Form>
            </Col>

            {/* right container*/}
            <Col
              className="d-flex justify-content-center align-items-center mx-auto m-4"
              lg={{ span: 6 }}
              md={{ span: 12 }}
            >
              <div className="green-2 h-100 w-100 rounded-4 d-flex flex-column justify-content-center align-items-center">
                <div>
                  <img
                    src="back.png"
                    alt="img"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="text-center w-75">
                  <h3 className="text-white">
                    "Attention is the new currency"
                  </h3>
                  <p className="text-white">
                    The more effortless the writing looks, the more effort the
                    writer actually put into the process.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
