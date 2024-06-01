import React, { useState } from "react";
import { FaUser, FaStoreAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import "./Form.css";

const Form = ({ title, subtitle, buttonText, handleSubmit, linkText, onBack }) => {
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleAddressChange = (e) => {
    const inputValue = e.target.value;
    if (/^\d{0,4}$/.test(inputValue)) {
      setAddress(inputValue);
    }
  };

  const handlePhoneChange = (e) => {
    const inputValue = e.target.value;
    if (/^\d+$/.test(inputValue) || inputValue === "") {
      setPhone(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = {
      username: username,
      address: address,
      email: email,
      phone: phone,
    };
    handleSubmit(formData);
    setUsername("");
    setAddress("");
    setEmail(""); 
    setPhone("");
  };

  return (
    <div className="containerCadastrar">
      <form onSubmit={handleFormSubmit}>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>

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
        <div className="input-field">
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FaEnvelope className="icon" />
        </div>
        <div className="input-field">
          <input
            type="tel"
            placeholder="Telefone"
            required
            value={phone}
            onChange={handlePhoneChange}
          />
          <FaPhone className="icon" />
        </div>

        <button type="submit">{buttonText}</button>

      </form>
    </div>
  );
};

export default Form;
