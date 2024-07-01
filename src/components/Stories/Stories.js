import React from "react";
import Story from "./Story";

function Stories() {
  const storiesData = [
    { src: "assets/img/9gag.svg", alt: "9gag", usuario: "9gag" },
    { src: "assets/img/meowed.svg", alt: "meowed", usuario: "meowed" },
    { src: "assets/img/barked.svg", alt: "barked", usuario: "barked" },
    {
      src: "assets/img/nathanwpylestrangeplanet.svg",
      alt: "nathanwpylestrangeplanet",
      usuario: "nathanwpylestrangeplanet",
    },
    {
      src: "assets/img/wawawicomics.svg",
      alt: "wawawicomics",
      usuario: "wawawicomics",
    },
    {
      src: "assets/img/respondeai.svg",
      alt: "respondeai",
      usuario: "respondeai",
    },
    {
      src: "assets/img/filomoderna.svg",
      alt: "filomoderna",
      usuario: "filomoderna",
    },
    {
      src: "assets/img/memeriagourmet.svg",
      alt: "memeriagourmet",
      usuario: "memeriagourmet",
    },
  ];

  return (
    <div className="stories">
      {storiesData.map((story, index) => (
        <Story
          key={index}
          src={story.src}
          alt={story.alt}
          usuario={story.usuario}
        />
      ))}
      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}

export default Stories;
