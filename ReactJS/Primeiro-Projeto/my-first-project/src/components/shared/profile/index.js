import React from "react";
import './style.css'

function Profile(props) {
  return (
    <div id="Profile">
      <h2 class="villainName">{props.villainName}</h2>
      <p class="description">{props.description}</p>
      <img class="Imagem" src={props.img_url} alt={props.personagem} />
      <br />
      <a href="{props.link}">{props.saibamais}</a>
    </div>
  );
}
export default Profile;
