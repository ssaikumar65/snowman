import { useCallback, useEffect, useState } from "react";
import Hangman from "./components/Hangman";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";
import words from "./data/wordList.json";
import "./index.css";

const randomWord = (): string => {
  return words[Math.floor(Math.random() * words.length)];
};

const CHANCES: number = 7;
const INFO: string =
  "Player should figure out the unknown word by guessing the letters in 7 chances. If too many incorrect letters are guessed, the snowman will disappear and the player loses the game.";

const App = () => {
  const [word, setWord] = useState<string>(randomWord());
  const [guess, setGuess] = useState<string[]>([]);
  const [incorrectGuess, setIncorrectGuess] = useState<string[]>([]);
  const [info, setInfo] = useState<boolean>(false);

  useEffect(() => {
    const keyHandler = (e: KeyboardEvent) => {
      if (!e.key.match(/^[a-z]$/)) return;

      e.preventDefault();

      addGuess(e.key);
    };

    document.addEventListener("keypress", keyHandler);

    return () => {
      document.removeEventListener("keypress", keyHandler);
    };
  }, [guess, incorrectGuess]);

  const addGuess = useCallback(
    (letter: string) => {
      if (guess.includes(letter) || incorrectGuess.includes(letter)) return;

      if (!word.split("").includes(letter)) {
        setIncorrectGuess((incorrectGuess) => [...incorrectGuess, letter]);
        return;
      }
      setGuess((guess) => [...guess, letter]);
    },
    [guess, incorrectGuess]
  );

  const onGameOver = (): void => {
    setWord(randomWord());
    setGuess([]);
    setIncorrectGuess([]);
  };

  const onInfo = (): void => {
    setInfo(!info);
  };

  const gameWon = word.split("").every((item) => guess.includes(item));

  if (gameWon) {
    return (
      <div className="gameOver">
        <span>
          Congratulations. You Won. The word is <span>{word}</span>
        </span>
        <button onClick={onGameOver}>Start Again</button>
      </div>
    );
  }

  return (
    <>
      {!(incorrectGuess.length >= CHANCES) ? (
        <div className="main">
          <div className="helpBox">
            <span
              onClick={() => setInfo(!info)}
              className={`info ${info ? "visible" : "hide"}`}
            >
              {INFO}
            </span>
          </div>
          <div className="keyboardContainer">
            <div className="title">SNOWMAN</div>
            <HangmanWord guess={guess} word={word} />
            <Keyboard
              addGuess={addGuess}
              guess={guess}
              incorrectGuess={incorrectGuess}
            />
            <div className="help">
              <button onClick={onInfo}>Help</button>
            </div>
          </div>
          <div className="drawingContainer">
            <Hangman incorrectGuess={incorrectGuess} />
          </div>
        </div>
      ) : (
        <div className="gameOver">
          <span>
            You Lose. The word is <span>{word}</span>
          </span>
          <button onClick={onGameOver}>Start Over</button>
        </div>
      )}
    </>
  );
};

export default App;
