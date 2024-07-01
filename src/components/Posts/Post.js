import React, { useState } from "react";

function Post({ usuario, imagem, curtidoPor, numeroCurtidas, usuarioImagem }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(Number(numeroCurtidas));
  const [isSaved, setIsSaved] = useState(false);

  const addLike = () => {
    if (!isLiked) {
      setIsLiked(true);
      setLikesCount(likesCount + 1);
    }
  };

  const toggleLike = () => {
    if (isLiked) {
      setIsLiked(false);
      setLikesCount(likesCount - 1);
    } else {
      setIsLiked(true);
      setLikesCount(likesCount + 1);
    }
  };

  const toggleSave = () => {
    setIsSaved(!isSaved);
  };

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
        <img onClick={addLike} src={imagem} alt="conteúdo" />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon
              name={isLiked ? "heart" : "heart-outline"}
              onClick={toggleLike}
              style={{
                cursor: "pointer",
                fontSize: "24px",
                color: isLiked ? "red" : "black",
              }}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon
              name={isSaved ? "bookmark" : "bookmark-outline"}
              onClick={toggleSave}
            ></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={`assets/img/${curtidoPor}.svg`} alt={curtidoPor} />
          <div className="texto">
            Curtido por <strong>{curtidoPor}</strong> e{" "}
            <strong>outras {likesCount.toLocaleString()} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
