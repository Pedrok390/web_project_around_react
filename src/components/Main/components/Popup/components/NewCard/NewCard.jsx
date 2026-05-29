import {useState} from "react";

export default function NewCard(props) {
  const {onAddPlaceSubmit} = props;
  const [name, setName] = useState();
  const [link, setLink] = useState();
  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleLinkChange(e) {
    setLink(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();

    onAddPlaceSubmit({
      name: name,
      link: link,
    });
  }
  return (
    <form className="popup__form" onSubmit={handleSubmit}>
      <div className="popup__form-container">
        <input className="popup__input" type="text" id="name" name="name" placeholder="Novo Local" required minLength="2" maxLength="30" onChange={handleNameChange} />
        <br />
        <span className="popup__input-error name-error"></span>
      </div>
      <div className="popup__form-container">
        <input className="popup__input" type="url" id="link" name="link" placeholder="Link da Imagem" onChange={handleLinkChange} />
        <br />
        <span className="popup__input-error job-error"></span>
      </div>
      <input className="popup__submit" type="submit" value="Salvar" />
    </form>
  );
}
