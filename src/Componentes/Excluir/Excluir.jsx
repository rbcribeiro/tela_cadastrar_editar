import { useState, useEffect } from "react";
import Modal from "react-modal";

const Excluir = ({ isOpen, onRequestClose, itemToDelete, onDeleteSubmit }) => {
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (itemToDelete) {
      setUsername(itemToDelete.username);
      setAddress(itemToDelete.address);
    }
  }, [itemToDelete]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onDeleteSubmit(itemToDelete);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Excluir Item"
      className="modal-content"
    >
      <div className="modal-container">
        <h2>Excluir Item</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <input type="text" placeholder="Nome" value={username} readOnly />
          </div>
          <div className="input-field">
            <input
              type="text"
              placeholder="Endereço"
              value={address}
              readOnly
            />
          </div>
          <div className="buttonContainer">
            <button onClick={onRequestClose}>Cancelar</button>
            <button type="submit">Excluir</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default Excluir;
