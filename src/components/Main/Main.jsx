import profileImage from "../../images/profile__image.png";
import editIcon from "../../images/edit-icon.svg";
import plusSign from "../../images/plus-sign.svg";

import NewCard from "./components/Popup/components/NewCard/NewCard";
import Popup from "./components/Popup/Popup";
import EditProfile from "./components/Popup/components/EditProfile/EditProfile";
import EditAvatar from "./components/Popup/components/EditAvatar/EditAvatar";
import Card from "./components/Card/Card";
import ImagePopup from "./components/Popup/components/ImagePopup/ImagePopup";

import {useState} from "react";

export default function Main() {
  const [popup, setPopup] = useState(null);

  const newCardPopup = {title: "New card", children: <NewCard />, type: "popup_type_form"};
  const newCardProfilePopup = {title: "Editar Perfil", children: <EditProfile />, type: "popup_type_form"};
  const newCardAvatarPopup = {title: "Editar Avatar", children: <EditAvatar />, type: "popup_type_form"};

  const cards = [
    {
      isLiked: false,
      _id: "5d1f0611d321eb4bdcd707dd",
      name: "Yosemite Valley",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
      owner: "5d1f0611d321eb4bdcd707dd",
      createdAt: "2019-07-05T08:10:57.741Z",
    },
    {
      isLiked: false,
      _id: "5d1f064ed321eb4bdcd707de",
      name: "Lake Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
      owner: "5d1f0611d321eb4bdcd707dd",
      createdAt: "2019-07-05T08:11:58.324Z",
    },
  ];

  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  function handleClosePopup() {
    setPopup(null);
  }
  return (
    <>
      <main className="content">
        <div className="profile">
          <img className="profile__image" src={profileImage} alt="Profile Picture" onClick={() => handleOpenPopup(newCardAvatarPopup)}></img>
          <div className="profile__container">
            <div className="profile__name-container">
              <h3 className="profile__name">Jacques</h3>
              <button className="profile__edit-button" id="profile__button" onClick={() => handleOpenPopup(newCardProfilePopup)}>
                <img className="profile__edit-image" src={editIcon} alt="Editar Perfil" />
              </button>
            </div>
            <p className="profile__job">Developer</p>
          </div>
          <button className="profile__add-button" id="card__button" onClick={() => handleOpenPopup(newCardPopup)}>
            <img className="profile__add-image" src={plusSign} alt="Adicionar" />
          </button>
        </div>
        <div className="elements">
          {cards.map((card) => (
            <Card key={card.id} card={card} handleOpenPopup={handleOpenPopup} />
          ))}
        </div>
        {popup && (
          <Popup onClose={handleClosePopup} title={popup.title} type={popup.type}>
            {popup.children}
          </Popup>
        )}
      </main>
    </>
  );
}
