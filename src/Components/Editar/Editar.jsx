import { useState } from "react";
import Form from "../Form/Form";

const Editar = ({ onBack }) => {
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Dados de Edição:", { username, address });
  };

  return (
    <Form
      title="Editar Endereço"
      buttonText="Salvar"
      username={username}
      setUsername={setUsername}
      address={address}
      setAddress={setAddress}
      handleSubmit={handleSubmit}
      linkText="Voltar"
      onBack={onBack}
    />
  );
};

export default Editar;