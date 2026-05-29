import { useContext, useRef } from "react";
import CurrentUserContext from "../../../../../../contexts/CurrentUserContext";

export default function EditAvatar() {
  const { handleUpdateAvatar } = useContext(CurrentUserContext);
  const avatarRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();

    handleUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }
  return (
    <form className="popup__form" name="edit-avatar" onSubmit={handleSubmit}>
      <input ref={avatarRef} className="popup__input" id="avatar" name="avatar" type="url" placeholder="Link do avatar" required />
      <button className="button popup__button" type="submit">
        Salvar
      </button>
    </form>
  );
}
