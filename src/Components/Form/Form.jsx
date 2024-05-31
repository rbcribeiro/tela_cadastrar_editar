import React, { useState } from "react";
import { FaUser, FaStoreAlt } from "react-icons/fa";
import "./Form.css";

const Form = ({ title, buttonText, handleSubmit, linkText, onBack }) => {
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");

  const handleAddressChange = (e) => {
    const inputValue = e.target.value;
    if (/^\d{0,4}$/.test(inputValue)) {
      setAddress(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = {
      username: username,
      address: address,
    };
    handleSubmit(formData);
    setUsername("");
    setAddress("");
  };

  return (
    <div className="container">
      <form onSubmit={handleFormSubmit}>
        <h1>{title}</h1>
        <div className="input-field">
          <input
            type="text"
            placeholder="Nome"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input
            type="text"
            placeholder="Endereço"
            required
            value={address}
            onChange={handleAddressChange}
          />
          <FaStoreAlt className="icon" />
        </div>

        <button type="submit">{buttonText}</button>
        <div className="signup-link">
          <p>
            <a href="#" onClick={onBack}>
              {linkText}
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Form;