import { createContext, useState } from "react";
import Icon from "../icon/Icon";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [correctWord, setCorrectWord] = useState("hello");
  const [isLoading, setIsLoading] = useState(true);
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
    hintContent: false,
    lost: false,
    won: false,
  });

  const fetchRandomWord = async () => {
    const response = await fetch(
      "https://random-words-api.herokuapp.com/w?n=1"
    );
    const data = await response.json();
    console.log(data[0]);
    if (data[0].length > 7) {
      fetchRandomWord();
    }
    setIsLoading(false);
    setCorrectWord(data[0]);
  };

  /* const fetchHint = async () => {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${correctWord}`
    );
    const data = await response.json();

    const synonym = data[0].meanings[0].definitions[0].synonyms[0];
    console.log(synonym);
    
    
    
    
    if (synonym) {
      setHint(synonym);
    } else {
      setHint("there is no hint");
    }
  }; */

  const playAsGuest = (e) => {
    if (e.target.textContent === "Play") {
      //animate the navbar to the bottom
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
        let test = "";
        for (let i = 0; i < correctWord.length; i++) {
          if (correctWord[i] === clickedLetter) {
            test += correctWord[i];
          }
        }

        setWord((prev) => {
          prev += test;
          //check if won
          if (prev.length === correctWord.length) {
            openNavBar("won", true);
          }
          return prev;
        });

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

  const checkIfWon = () => {
    console.log("Checking:", word.length);
  };

  const tradeLife = () => {
    if (lives > 1 && !tradedForHint) {
      toggleHintModal();
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

    //reset to defaults
    if (tradedForHint) toggleHintModal();
    fetchRandomWord();
    setLives(9);
    setTradedForHint(false);
    setClickedLetters("");
    setWord("");
    closeNavbar();
  };

  const openNavBar = (key, value) => {
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
      hintContent: false,
      lost: false,
      won: false,
    });
  };

  const toggleHintModal = () => {
    const hintModal = document.querySelector(".hint-modal");
    hintModal.classList.toggle("expand-hint");
  };

  return (
    <AppContext.Provider
      value={{
        isLoading,
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
        setWord,
        checkLetter,
        lives,
        setNavbarContent,
        navbarContent,
        tradeLife,
        fetchRandomWord,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
