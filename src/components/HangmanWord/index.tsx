import { JSX } from "react";
import "./index.css";

type Props = {
  guess: string[];
  word: string;
};

const HangmanWord = ({ word, guess }: Props): JSX.Element => {
  return (
    <div className="hangmanWord">
      {word.split("").map((letter, index) => (
        <span className="letterBox" key={index}>
          <span className={`${!guess.includes(letter) ? "hidden" : null}`}>
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};
export default HangmanWord;
