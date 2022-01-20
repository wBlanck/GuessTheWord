import { createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [correctWord, setCorrectWord] = useState("tiger");
  const [startScreen, setStartScreen] = useState(true);
  const [word, setWord] = useState("");
  const [lives, setLives] = useState(9);
  const [clickedLetters, setClickedLetters] = useState("");

  const playAsGuest = () => {
    setStartScreen(false);
  };

  const checkLetter = (e) => {
    const clickedLetter = e.target.textContent;
    console.log(e.target);
    if (!clickedLetters.includes(clickedLetter)) {
      //store clickedLetter to prevent losing life when clicking same letter multiple times
      setClickedLetters((prev) => prev + clickedLetter);
      if (correctWord.includes(clickedLetter)) {
        setWord((prev) => prev + clickedLetter);
        e.target.classList.add("correct");
      } else {
        e.target.classList.add("wrong");
        setLives((prev) => (prev -= 1));
      }
    }
  };

  return (
    <AppContext.Provider
      value={{
        correctWord,
        startScreen,
        playAsGuest,
        word,
        checkLetter,
        lives,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
