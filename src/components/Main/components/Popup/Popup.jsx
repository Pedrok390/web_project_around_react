import closeIcon from "../../../../images/close-icon.png";

export default function Popup(props) {
  const {onClose, title, children, type} = props;

  return (
    <div className={`popup ${type}`}>
      <div className="popup__container">
        <button className="popup__close" onClick={onClose}>
          <img className="popup__close-image" src={closeIcon} alt="Fechar" />
        </button>
        {title && <h4 className="popup__title">{title}</h4>}
        {children}
      </div>
    </div>
  );
}
