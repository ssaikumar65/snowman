import "./index.css";
import { HANGMAN } from "./HangmanConstants";

type Props = {
  incorrectGuess: string[];
};

const Hangman = ({ incorrectGuess }: Props) => {
  return (
    <div className="hangmanHolder">
      <div className="hangman">
        {HANGMAN.slice(0, HANGMAN.length - incorrectGuess.length).map(
          (item) => item
        )}
      </div>
    </div>
  );
};
export default Hangman;
