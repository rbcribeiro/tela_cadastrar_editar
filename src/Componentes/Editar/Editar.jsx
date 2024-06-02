import Modal from "react-modal";
import informacoesComuns from "../informacoesComuns/informacoesComuns";
import "./Editar.css"

const Editar = ({ isOpen, onRequestClose, itemToEdit, onEditSubmit }) => {
  const {
    username,
    address,
    email,
    phone,
    setUsername,
    handleAddressChange,
    setEmail,
    setPhone,
  } = informacoesComuns(itemToEdit);

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditSubmit({ username, address, email, phone });
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Editar Item"
      className="modal-content"
    >
      <h2>Editar Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="inputEditar"
          placeholder="Nome"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="number"
          className="inputEditar"
          placeholder="Endereço"
          value={address}
          onChange={handleAddressChange}
        />
        <input
          type="text"
          className="inputEditar"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          className="inputEditar"
          placeholder="Telefone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <div className="buttonContainer">
          <button onClick={onRequestClose}>Cancelar</button>
          <button type="submit" className="buttonEditar">Salvar</button>
        </div>
      </form>
    </Modal>
  );
};

export default Editar;
