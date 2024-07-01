import React, { useState } from "react";

function User({ usuario, imagem, icone }) {
  const [novoUsuario, setUsuario] = useState(usuario);
  const [novaImagem, setImagem] = useState(imagem);

  const changeName = () => {
    const newName = prompt("Qual seu nome de usuário?");
    if (newName) {
      setUsuario(newName);
    }
  };

  const changePic = () => {
    const newPic = prompt("Qual o link do seu novo avatar?");
    if (newPic) {
      setImagem(newPic);
    }
  };

  return (
    <div className="usuario">
      <img src={novaImagem} onClick={changePic} alt="imagem de perfil" />
      <div className="texto">
        <span>
          <strong>{novoUsuario}</strong>
          <ion-icon onClick={changeName} name={icone}></ion-icon>
        </span>
      </div>
    </div>
  );
}

export default User;
