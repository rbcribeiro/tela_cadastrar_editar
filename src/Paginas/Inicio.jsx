import { useState } from "react";
import Cadastrar from "../Components/Cadastrar/Cadastrar";
import Editar from "../Components/Editar/Editar";
import "./Inicio.css";

function Inicio() {
  const [mode, setMode] = useState(null);

  return (
    <div className={`Inicio ${mode ? "content-mode" : ""}`}>
      {mode === null && (
        <div className="initial-content">
          <h1>SpaceX</h1>
          <div className="button-field">
            <button onClick={() => setMode("cadastrar")}>Cadastrar
            </button>
          </div>
          <div className="button-field">
            <button onClick={() => setMode("editar")}>Editar
            </button>
          </div>
        </div>
      )}
      {mode === "cadastrar" && <Cadastrar onBack={() => setMode(null)} />}
      {mode === "editar" && <Editar onBack={() => setMode(null)} />}
    </div>
  );
}

export default Inicio;