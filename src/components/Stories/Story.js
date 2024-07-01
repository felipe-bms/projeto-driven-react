import React from "react";

function Story({ src, alt, usuario }) {
  return (
    <div className="story">
      <div className="imagem">
        <img src={src} alt={alt} />
      </div>
      <div className="usuario">{usuario}</div>
    </div>
  );
}

export default Story;
