import { useState } from "react";
import Modal from "react-modal";
import FormCadastro from "../Componentes/FormCadastro/FormCadastro";
import ItemLista from "../Componentes/ItemLista/ItemLista";
import Editar from "../Componentes/Editar/Editar";
import Excluir from "../Componentes/Excluir/Excluir"; 
import "./Inicial.css";
import imagem from "../assets/marte.jpg";

Modal.setAppElement("#root");

const Inicial = ({ onBack }) => {
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [items, setItems] = useState([]);
  const [modalAberto, setModalAberto] = useState(false);
  const [modalExclusaoAberto, setModalExclusaoAberto] = useState(false);
  const [itemToEdit, setItemToEdit] = useState(null);
  const [itemToDelete, setItemToDelete] = useState(null);

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

  const abrirModalExclusao = (item) => {
    setItemToDelete(item);
    setModalExclusaoAberto(true);
  };

  const fecharModalExclusao = () => {
    setItemToDelete(null);
    setModalExclusaoAberto(false);
  };

  const handleEditSubmit = (editedItem) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item === itemToEdit ? editedItem : item))
    );
    fecharModalEdicao();
  };

  const handleDeleteSubmit = (deletedItem) => {
    setItems((prevItems) => prevItems.filter((item) => item !== deletedItem));
    fecharModalExclusao();
  };

  return (
    <div className="containerGrid">
        <img src={imagem} alt="Marte" className="imagemMarte" />

        <FormCadastro
          title="SpaceX"
          subtitle="Novo Endereço"
          buttonText="CADASTRAR"
          username={username}
          setUsername={setUsername}
          address={address}
          setAddress={setAddress}
          handleSubmit={handleSubmit}
        />
      <div className="containerCadastrados">
        <ItemLista
          items={items}
          abrirModalEdicao={abrirModalEdicao}
          abrirModalExclusao={abrirModalExclusao} 
        />
      </div>
      <Editar
        isOpen={modalAberto}
        onRequestClose={fecharModalEdicao}
        itemToEdit={itemToEdit}
        onEditSubmit={handleEditSubmit}
      />
      <Excluir
        isOpen={modalExclusaoAberto}
        onRequestClose={fecharModalExclusao}
        itemToDelete={itemToDelete}
        onDeleteSubmit={handleDeleteSubmit}
      />
    </div>
  );
};

export default Inicial;
