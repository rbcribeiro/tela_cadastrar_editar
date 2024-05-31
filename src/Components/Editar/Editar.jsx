import { useState, useEffect } from "react";
import Modal from "react-modal";

const Editar = ({ isOpen, onRequestClose, itemToEdit, onEditSubmit }) => {
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (itemToEdit) {
      setUsername(itemToEdit.username);
      setAddress(itemToEdit.address);
    }
  }, [itemToEdit]);

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
    >
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
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button type="submit">Salvar</button>
      </form>
      <button onClick={onRequestClose}>Fechar</button>
    </Modal>
  );
};

export default Editar;