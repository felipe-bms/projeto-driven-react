import React from "react";

function Post({ usuario, imagem, curtidoPor, numeroCurtidas, usuarioImagem }) {
  return (
    <div className="post">
      <div className="topo">
        <div className="usuario">
          <img src={usuarioImagem} alt={usuario} />
          {usuario}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img src={imagem} alt="conteúdo" />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={`assets/img/${curtidoPor}.svg`} alt={curtidoPor} />
          <div className="texto">
            Curtido por <strong>{curtidoPor}</strong> e{" "}
            <strong>outras {numeroCurtidas} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
