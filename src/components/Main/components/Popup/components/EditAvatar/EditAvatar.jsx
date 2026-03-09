export default function EditAvatar() {
  return (
    <form className="popup__form" name="edit-avatar">
      <input className="popup__input" id="avatar" name="avatar" type="url" placeholder="Link do avatar" required />
      <button className="button popup__button" type="submit">
        Salvar
      </button>
    </form>
  );
}
