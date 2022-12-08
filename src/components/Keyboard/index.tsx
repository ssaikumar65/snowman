import "./index.css";
import { KEYS } from "../../data/constants";

type Props = {
  guess: string[];
  incorrectGuess: string[];
  addGuess: (letter: string) => void;
};

const Keyboard = ({ guess, incorrectGuess, addGuess }: Props) => {
  const onSubmit = (letter: string) => {
    addGuess(letter);
  };

  const disableKey = (letter: string): boolean => {
    if (guess.includes(letter) || incorrectGuess.includes(letter)) return true;
    return false;
  };

  return (
    <div className="keyboard">
      {KEYS.map((keys, index) => (
        <div key={index} className="buttonHolder">
          {keys.map((letter) => (
            <button
              disabled={disableKey(letter)}
              key={letter}
              onClick={() => onSubmit(letter)}
              className="letter"
            >
              {letter}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};
export default Keyboard;
