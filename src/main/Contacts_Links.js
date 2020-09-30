import React from "react";

function Contacr_links(props) {
  return (
    <div className="Contact_Item">
      <img className="Contact_Logo" src={props.logo} alt="Photo" />
      <a href={props.link}>{props.contact_name}</a>
    </div>
  );
}

export default Contacr_links;
