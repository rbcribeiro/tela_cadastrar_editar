import React from "react";
import { FaEdit } from "react-icons/fa";
import "./ItemLista.css";

const ItemLista = ({ items, abrirModalEdicao }) => {
  const handleEditarClick = (item) => {
    abrirModalEdicao(item);
  };

  return (
    <div className="item-list-container">
      <h2>Cadastrados</h2>
      <ul>
        {items.map((item, index) => (
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