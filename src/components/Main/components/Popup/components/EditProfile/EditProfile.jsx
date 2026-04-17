import {useState, useContext} from "react";
import CurrentUserContext from "../../../../../../contexts/CurrentUserContext";

export default function EditProfile() {
  const {currentUser, handleUpdateUser} = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleUpdateUser({name, job: description});
  };
  return (
    <form className="popup__form" onSubmit={handleSubmit}>
      <div className="popup__form-container">
        <input className="popup__input" type="text" id="name" name="name" value={name} onChange={handleNameChange} placeholder="Nome" required minLength="2" maxLength="40" />
        <br />
        <span className="popup__input-error name-error"></span>
      </div>
      <div className="popup__form-container">
        <input className="popup__input" type="text" id="job" value={description} onChange={handleDescriptionChange} name="job" placeholder="Profissão" required minLength="2" maxLength="200" />
        <br />
        <span className="popup__input-error job-error"></span>
      </div>
      <input className="popup__submit" type="submit" value="Salvar" />
    </form>
  );
}
