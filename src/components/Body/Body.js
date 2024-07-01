import React from "react";
import Stories from "../Stories/Stories";
import Posts from "../Posts/Posts";
import SideBar from "../SideBar/SideBar";

function Body() {
  return (
    <div class="corpo">
      <div class="esquerda">
        <Stories />
        <Posts />
      </div>
      <SideBar />
    </div>
  );
}

export default Body;
