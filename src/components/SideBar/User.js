import React from "react";

function User({ usuario, imagem, icone }) {
  return (
    <div className="usuario">
      <img src={imagem} alt="imagem de perfil" />
      <div className="texto">
        <span>
          <strong>{usuario}</strong>
          <ion-icon name={icone}></ion-icon>
        </span>
      </div>
    </div>
  );
}

export default User;
