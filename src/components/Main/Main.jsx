import profileImage from "../../images/profile__image.png";
import editIcon from "../../images/edit-icon.svg";
import plusSign from "../../images/plus-sign.svg";

import NewCard from "./components/Popup/components/NewCard/NewCard";
import Popup from "./components/Popup/Popup";
import EditProfile from "./components/Popup/components/EditProfile/EditProfile";
import EditAvatar from "./components/Popup/components/EditAvatar/EditAvatar";
import Card from "./components/Card/Card";
import ImagePopup from "./components/Popup/components/ImagePopup/ImagePopup";
import {api} from "../../utils/api";

import {useState, useEffect, useContext} from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function Main(props) {
  const {onOpenPopup, onClosePopup, popup, onCardLike, onCardDelete, cards, onAddPlaceSubmit} = props
  const {currentUser} = useContext(CurrentUserContext);

  const newCardPopup = {title: "New card", children: <NewCard onAddPlaceSubmit={onAddPlaceSubmit} />, type: "popup_type_form"};
  const newCardProfilePopup = {title: "Editar Perfil", children: <EditProfile />, type: "popup_type_form"};
  const newCardAvatarPopup = {title: "Editar Avatar", children: <EditAvatar />, type: "popup_type_form"};

  return (
    <>
      <main className="content">
        <div className="profile">
          <img className="profile__image" src={currentUser.avatar} alt="Profile Picture" onClick={() => onOpenPopup(newCardAvatarPopup)} />
          <div className="profile__container">
            <div className="profile__name-container">
              <h3 className="profile__name">{currentUser.name}</h3>
              <button className="profile__edit-button" id="profile__button" onClick={() => onOpenPopup(newCardProfilePopup)}>
                <img className="profile__edit-image" src={editIcon} alt="Editar Perfil" />
              </button>
            </div>
            <p className="profile__job">{currentUser.about}</p>
          </div>
          <button className="profile__add-button" id="card__button" onClick={() => onOpenPopup(newCardPopup)}>
            <img className="profile__add-image" src={plusSign} alt="Adicionar" />
          </button>
        </div>
        <div className="elements">
          {cards.map((card) => (  
            <Card key={card._id} card={card} handleOpenPopup={onOpenPopup} onCardLike={onCardLike} onCardDelete={onCardDelete} />
          ))}
        </div>
        {popup && (
          <Popup onClose={onClosePopup} title={popup.title} type={popup.type}>
            {popup.children}
          </Popup>
        )}
      </main>
    </>
  );
}
