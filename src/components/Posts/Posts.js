import React from "react";
import Post from "./Post";

function Posts() {
  const postsData = [
    {
      usuario: "meowed",
      imagem: "assets/img/gato-telefone.svg",
      curtidoPor: "respondeai",
      numeroCurtidas: "101.523",
      usuarioImagem: "assets/img/meowed.svg",
    },
    {
      usuario: "barked",
      imagem: "assets/img/dog.svg",
      curtidoPor: "adorable_animals",
      numeroCurtidas: "99.159",
      usuarioImagem: "assets/img/barked.svg",
    },
  ];

  return (
    <div className="posts">
      {postsData.map((post, index) => (
        <Post
          key={index}
          usuario={post.usuario}
          imagem={post.imagem}
          curtidoPor={post.curtidoPor}
          numeroCurtidas={post.numeroCurtidas}
          usuarioImagem={post.usuarioImagem}
        />
      ))}
    </div>
  );
}

export default Posts;
