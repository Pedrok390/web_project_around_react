import {useEffect, useState} from "react";
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";
import {api} from "../utils/api.js";
import CurrentUserContext from "../contexts/CurrentUserContext.js";
import NewCard from "./Main/components/Popup/components/NewCard/NewCard.jsx";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [popup, setPopup] = useState(null);

  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  function handleClosePopup() {
    setPopup(null);
  }
  const handleUpdateAvatar = (data) => {
    (async () => {
      await api.setUserAvatar(data).then((newAvatar) => {
        setCurrentUser(newAvatar);
        handleClosePopup();
      })
    })();
  }

  useEffect(() => {
    (async () => {
      await api.getUserInfo().then((data) => {
        setCurrentUser(data);
      });
    })();
  }, []);

  const handleUpdateUser = (data) => {
    (async () => {
      await api.setUserInfo(data).then((newData) => {
        setCurrentUser(newData);
        handleClosePopup()
      });
    })();
  };

  useEffect(() => {
    api.getInitialCards().then((cardData) => {
      setCards(cardData);
      console.log(cardData)
    });
  }, []);

  const [cards, setCards] = useState([]);

  async function handleCardLike(card) {
    // Verificar mais uma vez se esse cartão já foi curtido
    const isLiked = card.isLiked;

    // Enviar uma solicitação para a API e obter os dados do cartão atualizados
    await api
      .changeLikeCardStatus({id: card._id, isLiked: !isLiked})
      .then((newCard) => {
        console.log("NEW CARD:", newCard);

        if (!newCard || !newCard._id) {
          console.error("Card inválido da API:", newCard);
          return; // 🚫 não atualiza o state
        }

        setCards((state) => state.map((currentCard) => (currentCard._id === card._id ? newCard : currentCard)));
      })
      .catch((error) => console.error(error));
  }

  async function handleCardDelete(card) {
    await api.deleteCard({id: card._id}).then(() => {
      setCards((state) => state.filter((currentCard) => currentCard._id !== card._id));
    });
  }

  const handleAddPlaceSubmit = (data) => {
    api.addCard(data).then((newCard)  => {
      setCards([newCard,...cards])
      handleClosePopup()
    })
    .catch((error) => console.error(error));
  }
  return (
    <>
      <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser, handleUpdateAvatar, handleAddPlaceSubmit }}>
      <div className="page">
        <Header />
        <Main onOpenPopup={handleOpenPopup} onClosePopup={handleClosePopup} popup={popup} onCardLike={handleCardLike} onCardDelete={handleCardDelete} cards={cards} onAddPlaceSubmit={handleAddPlaceSubmit} />
        <Footer />
      </div>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
