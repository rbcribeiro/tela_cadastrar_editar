import { useState, useEffect } from "react";
import Modal from "react-modal";
import "./Editar.css";

const Editar = ({ isOpen, onRequestClose, itemToEdit, onEditSubmit }) => {
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (itemToEdit) {
      setUsername(itemToEdit.username);
      setAddress(itemToEdit.address);
    }
  }, [itemToEdit]);

  const handleAddressChange = (e) => {
    const inputValue = e.target.value;
    if (/^\d{0,4}$/.test(inputValue)) {
      setAddress(inputValue);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditSubmit({ username, address });
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Editar Item"
      className="modal-content"
    >
      <div className="modal-container">
        <h2>Editar Item</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <input
              type="text"
              placeholder="Nome"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-field">
            <input
              type="text"
              placeholder="Endereço"
              value={address}
              onChange={handleAddressChange}
            />
          </div>
          <div className="button-container">
            <button type="submit">Salvar</button>
            <button onClick={onRequestClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default Editar;