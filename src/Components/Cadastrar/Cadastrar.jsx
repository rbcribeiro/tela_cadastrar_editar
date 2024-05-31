import { useState } from "react";
import Modal from "react-modal";
import Form from "../Form/Form";
import ItemLista from "../ItemLista/ItemLista";
import Editar from "../Editar/Editar";
import "./Cadastrar.css";

Modal.setAppElement("#root");

const Cadastrar = ({ onBack }) => {
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [items, setItems] = useState([]);
  const [modalAberto, setModalAberto] = useState(false);
  const [itemToEdit, setItemToEdit] = useState(null);

  const handleSubmit = (formData) => {
    setItems([...items, formData]);
    setUsername("");
    setAddress("");
  };

  const abrirModalEdicao = (item) => {
    setItemToEdit(item);
    setModalAberto(true);
  };

  const fecharModalEdicao = () => {
    setModalAberto(false);
  };

  const handleEditSubmit = (editedItem) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item === itemToEdit ? editedItem : item))
    );
  };

  return (
    <div className="ContainerGrid">
      <div className="Cadastrar">
        <Form
          title="Cadastrar Lote"
          buttonText="Cadastrar"
          username={username}
          setUsername={setUsername}
          address={address}
          setAddress={setAddress}
          handleSubmit={handleSubmit}
          linkText="Voltar"
          onBack={onBack}
        />
      </div>
      <div className="ItemLista Exibir">
        <ItemLista items={items} abrirModalEdicao={abrirModalEdicao} />
      </div>
      <Editar
        isOpen={modalAberto}
        onRequestClose={fecharModalEdicao}
        itemToEdit={itemToEdit}
        onEditSubmit={handleEditSubmit}
      />
    </div>
  );
};

export default Cadastrar;