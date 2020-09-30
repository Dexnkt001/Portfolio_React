import React from "react";
import Contacts_Links from "./Contacts_Links";
import VK from "../photo/Vkantakte.png";
import Insta from "../photo/In_Sto_Gramm.png";
import Mail from "../photo/Gmail.png";

function Contact() {
  const arr = [
    { logo: VK, link: "https://vk.com/nikita_dx", contact_name: "VKontakte" },
    {
      logo: Insta,
      link: "https://www.instagram.com/d_nikita_/",
      contact_name: "Instagram",
    },
    { logo: Mail, link: "https://mail.ru/", contact_name: "Email" },
  ];

  return (
    <div className="Contacts">
      <div className="Contacts_side">
        <div className="Container_Contact">
          <h1>Contacts:</h1>
          {arr.map((element) => {
            return (
              <Contacts_Links
                logo={element.logo}
                link={element.link}
                contact_name={element.contact_name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Contact;
