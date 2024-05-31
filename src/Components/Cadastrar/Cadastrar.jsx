import { useState } from "react";
import Form from "../Form/Form";

const Cadastrar = ({ onBack }) => {
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Dados de Cadastro:", { username, address });
  };

  return (
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
  );
};

export default Cadastrar;