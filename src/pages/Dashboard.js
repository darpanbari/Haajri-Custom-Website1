import React, { useState } from "react";
import SideNavbar from "../components/SideNavbar";
import { Form } from "react-bootstrap";
import { GiArtificialIntelligence } from "react-icons/gi";
import AdminProfileLogout from "../components/AdminProfileLogout";
import HeaderMessageBox from "../components/HeaderMessageBox";
import LanguageBtn from "../components/LanguageBtn";

const Dashboard = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [subject, setSubject] = useState("");
  const [attachment, setAttachment] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setCategory("");
    setStatus("");
    setSubject("");
    setAttachment("");
    setPriority("");
    setDescription("");
    console.log(
      name,
      email,
      category,
      status,
      subject,
      attachment,
      priority,
      description
    );
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
            <h5>Create Ticket</h5>
            <p>Dashboard </p>
          </div>
          <Form className="my-form p-5 mx-4 rounded-3 mt-3 custom-shadow bg-custom-white"></Form>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
