export default function ImagePopup(props) {
  const {card} = props;
  return (
    <div className="popup__element">
      <img className="popup__image" src={card.link} alt="" />
      <p className="popup__name">{card.name}</p>
    </div>
  );
}
