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
      setNavbarContent({ ...navbarContent, icons: true });
    }
    if (!isGameOver) {
      setPlay(true);
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
    const navbar = document.querySelector(".navbar");
    setLives((prev) => {
      prev -= 1;

      if (prev === 0) {
        setPlay(false);
        setIsGameOver(true);
        setNavbarContent({
          ...navbarContent,
          icons: false,
          user: false,
          restart: false,
          hint: false,
          lost: true,
        });

        navbar.classList.add("expand");
      }

      return prev;
    });
  };

  const tradeLife = () => {
    const navbar = document.querySelector(".navbar");
    if (lives > 1 && !tradedForHint) {
      setTradedForHint(true);
      setLives((prev) => prev - 1);
      navbar.classList.remove("expand");
      setNavbarContent({
        ...navbarContent,
        icons: true,
        user: false,
        restart: false,
        hint: false,
        lost: false,
      });
    }
  };

  const restartGame = () => {
    console.log("restart");
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
