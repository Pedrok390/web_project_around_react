import trashIcon from "../../../../images/trash-icon.svg";
import ImagePopup from "../Popup/components/ImagePopup/ImagePopup";

export default function Card(props) {
  const {name, link, isLiked} = props.card;
  const {handleOpenPopup} = props;
  const imageComponent = {
    title: null,
    children: <ImagePopup card={props.card} />,
    type: "popup_type_image",
  };
  return (
    <>
      <div className="element">
        <button className="element__delete">
          <img className="element__delete-icon" src={trashIcon} alt="Trash Icon" />
        </button>
        <img className="element__image" src={link} alt="" onClick={() => handleOpenPopup(imageComponent)} />
        <div className="element__content">
          <h4 className="element__name">{name}</h4>
          <button className="element__button">
            <svg className="element__like" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path
                className="element__like_icon"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
           2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
           C13.09 3.81 14.76 3 16.5 3
           19.58 3 22 5.42 22 8.5
           c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                fill="white"
                stroke="black"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
