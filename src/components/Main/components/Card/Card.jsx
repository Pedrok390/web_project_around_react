import trashIcon from "../../../../images/trash-icon.svg";
import likeIcon from "../../../../images/like-icon.svg"
import ImagePopup from "../Popup/components/ImagePopup/ImagePopup";
import RemoveCard from "../Popup/components/RemoveCard/RemoveCard";

export default function Card(props) {
  const {name, link, isLiked} = props.card;
  const {handleOpenPopup} = props;
  const imageComponent = {
    title: null,
    children: <ImagePopup card={props.card} />,
    type: "popup_type_image",
  };
  const removeComponent = {
    title: "Tem certeza?",
    children: <RemoveCard />,
    type: "popup_type_form",
  }
  return (
    <>
      <div className="element">
        <button className="element__delete">
          <img className="element__delete-icon" src={trashIcon} alt="Trash Icon" onClick={() => handleOpenPopup(removeComponent)} />
        </button>
        <img className="element__image" src={link} alt={name} onClick={() => handleOpenPopup(imageComponent)} />
        <div className="element__content">
          <h4 className="element__name">{name}</h4>
          <button className="element__button">
            <img className="element__like" src={likeIcon} alt="like icon"/>
          </button>
        </div>
      </div>
    </>
  );
}
