import { createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [correctWord, setCorrectWord] = useState("tiger");
  const [hint, setHint] = useState("cat");
  const [tradedForHint, setTradedForHint] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [play, setPlay] = useState(false);
  const [lives, setLives] = useState(9);
  const [word, setWord] = useState("");
  const [clickedLetters, setClickedLetters] = useState("");
  const [navbarContent, setNavbarContent] = useState({
    icons: false,
    user: false,
    restart: false,
    hint: false,
    lost: false,
  });

  const playAsGuest = (e) => {
    if (e.target.textContent === "Play") {
      const navbar = document.querySelector(".navbar");
      navbar.classList.add("mobile");
      //hides the "play" text
      document.querySelector(".play").remove();
      setPlay(true);
      closeNavbar();
    }
  };

  const checkLetter = (e) => {
    const clickedLetter = e.target.textContent;

    if (!clickedLetters.includes(clickedLetter)) {
      //store clickedLetter to prevent losing life when clicking same letter multiple times
      setClickedLetters((prev) => prev + clickedLetter);

      //check clickedLetter
      if (correctWord.includes(clickedLetter)) {
        setWord((prev) => prev + clickedLetter);
        e.target.classList.add("correct");
      } else {
        e.target.classList.add("wrong");
        checkLives();
      }
    }
  };

  const checkLives = () => {
    setLives((prev) => {
      prev -= 1;

      if (prev === 0) {
        setIsGameOver(true);
        openNavBar("lost", true);
      }

      return prev;
    });
  };

  const tradeLife = () => {
    if (lives > 1 && !tradedForHint) {
      setTradedForHint(true);
      setLives((prev) => prev - 1);
      closeNavbar();
    }
  };

  const restartGame = () => {
    const letters = document.querySelector(".letters").children;
    //remove classes from previous clicked letters
    Array.from(letters).map((letter) => {
      if (clickedLetters.includes(letter.textContent)) {
        letter.classList.remove("wrong");
        letter.classList.remove("correct");
      }
    });

    setLives(9);
    setTradedForHint(false);
    setClickedLetters("");
    setWord("");

    closeNavbar();
  };

  const openNavBar = (key, value) => {
    console.log(key, value);
    const navbar = document.querySelector(".navbar");
    navbar.classList.add("expand");
    setNavbarContent({
      ...navbarContent,
      icons: false,
      [key]: value,
    });
  };

  const closeNavbar = () => {
    const navbar = document.querySelector(".navbar");
    navbar.classList.remove("expand");
    setNavbarContent({
      ...navbarContent,
      icons: true,
      user: false,
      restart: false,
      hint: false,
      lost: false,
    });
  };

  return (
    <AppContext.Provider
      value={{
        tradedForHint,
        openNavBar,
        closeNavbar,
        isGameOver,
        correctWord,
        hint,
        restartGame,
        setPlay,
        play,
        playAsGuest,
        word,
        checkLetter,
        lives,
        setNavbarContent,
        navbarContent,
        tradeLife,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
