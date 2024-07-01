import React from "react";
import Post from "./Post";

function Posts() {
  const postsData = [
    {
      usuario: "barked",
      imagem:
        "https://static.todamateria.com.br/upload/sh/ut/shutterstock1411747946-cke.jpg",
      curtidoPor: "adorable_animals",
      numeroCurtidas: "12564",
      usuarioImagem: "assets/img/barked.svg",
    },
    {
      usuario: "meowed",
      imagem: "assets/img/gato-telefone.svg",
      curtidoPor: "respondeai",
      numeroCurtidas: "101523",
      usuarioImagem: "assets/img/meowed.svg",
    },
    {
      usuario: "barked",
      imagem: "assets/img/dog.svg",
      curtidoPor: "adorable_animals",
      numeroCurtidas: "99159",
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
