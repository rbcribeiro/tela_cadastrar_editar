import Modal from "react-modal";
import informacoesComuns from "../informacoesComuns/informacoesComuns";
import "./Excluir.css"

const Excluir = ({ isOpen, onRequestClose, itemToDelete, onDeleteSubmit }) => {
  const {
    username,
    address,
    email,
    phone,
  } = informacoesComuns(itemToDelete);

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
      <div>
        <h2>Deseja Excluir?</h2>
        <div className="dadosExcluir">
          <label>Nome:</label>
          <span>{username}</span>
        </div>
        <div className="dadosExcluir">
          <label>Endereço:</label>
          <span>{address}</span>
        </div>
        <div className="dadosExcluir">
          <label>Email:</label>
          <span>{email}</span>
        </div>
        <div className="dadosExcluir">
          <label>Telefone:</label>
          <span>{phone}</span>
        </div>
        <div className="buttonContainer">
          <button onClick={onRequestClose}>Cancelar</button>
          <button type="submit" onClick={handleSubmit} className="buttonExcluir">Excluir</button>
        </div>
      </div>
    </Modal>
  );
};

export default Excluir;
