import { FaUser, FaStoreAlt } from "react-icons/fa";
import "./Form.css";

const Form = ({ title, buttonText, username, setUsername, address, setAddress, handleSubmit, linkText, onBack }) => {
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
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
            type="address"
            placeholder="Endereço"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <FaStoreAlt className="icon" />
        </div>

        <button type="submit">{buttonText}</button>
        <div className="signup-link">
          <p><a href="#" onClick={onBack}>{linkText}</a></p>
        </div>
      </form>
    </div>
  );
};

export default Form;