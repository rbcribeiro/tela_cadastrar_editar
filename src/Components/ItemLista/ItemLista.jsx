import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import "./ItemLista.css";

const ItemLista = ({ items, abrirModalEdicao }) => {
  const [termoBusca, setTermoBusca] = useState("");

  const handleEditarClick = (item) => {
    abrirModalEdicao(item);
  };

  const handleTermoBuscaChange = (event) => {
    setTermoBusca(event.target.value);
  };

  const filteredItems = items.filter(item =>
    item.username.toLowerCase().startsWith(termoBusca.toLowerCase())
  );

  return (
    <div className="item-list-container">
      <h2>Cadastrados</h2>
      <input
        type="text"
        placeholder="Buscar por nome..."
        value={termoBusca}
        onChange={handleTermoBuscaChange}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index} className="list-item">
            <p>Nome: {item.username}</p>
            <p>Endereço: {item.address}</p>
            <button
              onClick={() => handleEditarClick(item)}
              className="edit-button"
            >
              Editar Endereço <FaEdit />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemLista;
