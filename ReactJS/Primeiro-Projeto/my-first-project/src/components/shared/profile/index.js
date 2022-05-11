import React from "react";

function Profile(props) {
  return (
    <div id="Profile">
      <h2 className="villainName">{props.villainName}</h2>
      <p className="description">{props.description}</p>
      <img className="Imagem" src={props.img_url} alt={props.personagem} />
      <br />
      <a href="{props.link}">{props.saibamais}</a>
    </div>
  );
}
export default Profile;
