import React from "react";

function Suggestion({ usuario, imagem, razao }) {
  return (
    <div className="sugestao">
      <div className="usuario">
        <img src={imagem} alt={usuario} />
        <div className="texto">
          <div className="nome">{usuario}</div>
          <div className="razao">{razao}</div>
        </div>
      </div>
      <div className="seguir">Seguir</div>
    </div>
  );
}

export default Suggestion;
