import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";

import "./ItemLista.css";

const ItemLista = ({ items, abrirModalEdicao, abrirModalExclusao }) => {
  const [termoBusca, setTermoBusca] = useState("");

  const handleEditarClick = (item) => {
    abrirModalEdicao(item);
  };

  const handleExcluirClick = (item) => {
    abrirModalExclusao(item);
  };

  const handleTermoBuscaChange = (event) => {
    setTermoBusca(event.target.value);
  };

  const filteredItems = items.filter((item) =>
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
          <li key={index} className="containerExibir">
            <div className="nomeEndereco">
              <p>Nome: {item.username}</p>
              <p>Endereço: {item.address}</p>
              <p>Email: {item.email}</p> 
              <p>Telefone: {item.phone}</p> 
            </div>
            <div className="containerButton">
              <span className="iconButton" onClick={() => handleEditarClick(item)}>
                <FaPencilAlt />
              </span>
              <span className="iconButton" onClick={() => handleExcluirClick(item)}>
                <MdDelete />
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemLista;
