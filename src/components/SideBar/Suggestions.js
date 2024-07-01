import React from "react";
import Suggestion from "./Suggestion";

function Suggestions() {
  const suggestions = [
    {
      usuario: "bad.vibes.memes",
      imagem: "assets/img/bad.vibes.memes.svg",
      razao: "Segue você",
    },
    {
      usuario: "chibirdart",
      imagem: "assets/img/chibirdart.svg",
      razao: "Segue você",
    },
    {
      usuario: "razoesparaacreditar",
      imagem: "assets/img/razoesparaacreditar.svg",
      razao: "Novo no Instagram",
    },
    {
      usuario: "adorable_animals",
      imagem: "assets/img/adorable_animals.svg",
      razao: "Segue você",
    },
    {
      usuario: "smallcutecats",
      imagem: "assets/img/smallcutecats.svg",
      razao: "Segue você",
    },
  ];

  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {suggestions.map((suggestion, index) => (
        <Suggestion
          key={index}
          usuario={suggestion.usuario}
          imagem={suggestion.imagem}
          razao={suggestion.razao}
        />
      ))}
    </div>
  );
}

export default Suggestions;
