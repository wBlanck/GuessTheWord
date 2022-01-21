import { createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [correctWord, setCorrectWord] = useState("tiger");
  const [hint, setHint] = useState("cat");
  const [isGameOver, setIsGameOver] = useState(false);
  /*  const [showHint, setShowHint] = useState(false); */
  const [play, setPlay] = useState(false);
  const [lives, setLives] = useState(9);
  const [word, setWord] = useState("");
  const [clickedLetters, setClickedLetters] = useState("");
  const [navbarContent, setNavbarContent] = useState({
    icons: false,
    user: false,
    restartGame: false,
    hint: false,
  });

  const playAsGuest = (e) => {
    if (e.target.textContent === "Play") {
      const navbar = document.querySelector(".navbar");
      navbar.classList.add("mobile");
      //hides the "play" text
      document.querySelector(".play").style.display = "none";
      setNavbarContent({ ...navbarContent, icons: true });
    }
    if (!isGameOver) {
      setPlay(true);
    }
  };

  const checkLetter = (e) => {
    const clickedLetter = e.target.textContent;
    console.log(e.target);

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
        setPlay(false);
        setIsGameOver(true);

        const navbar = document.querySelector(".navbar");
        navbar.classList.add("expand");
      }
      return prev;
    });
  };
  const tradeLife = (e) => {
    const navbar = document.querySelector(".navbar");

    if (e.target.textContent === "yes") {
      setLives((prev) => prev - 1);
      navbar.classList.remove("expand");
      setNavbarContent({
        ...navbarContent,
        icons: true,
        user: false,
        restartGame: false,
        hint: false,
      });
    } else {
    }
  };
  return (
    <AppContext.Provider
      value={{
        isGameOver,
        correctWord,
        hint,

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
