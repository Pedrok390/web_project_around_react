export default function NewCard() {
  return (
    <form className="popup__form">
      <div className="popup__form-container">
        <input className="popup__input" type="text" id="name" name="name" placeholder="Nome" required minLength="2" maxLength="40" />
        <br />
        <span className="popup__input-error name-error"></span>
      </div>
      <div className="popup__form-container">
        <input className="popup__input" type="text" id="job" name="job" placeholder="Profissão" required minLength="2" maxLength="200" />
        <br />
        <span className="popup__input-error job-error"></span>
      </div>
      <input className="popup__submit popup__submit_inactive" type="submit" value="Salvar" />
    </form>
  );
}
