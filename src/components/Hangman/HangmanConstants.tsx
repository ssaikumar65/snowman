const HEAD = (i: number) => {
  return (
    <div key={i} className="circle face">
      <div className="right eye"></div>
      <div className="left eye"></div>
      <div className="nose"></div>
    </div>
  );
};
const HAT = (i: number) => <div key={i} className="hat"></div>;
const RIGHT_ARM = (i: number) => <div key={i} className="right arm"></div>;
const LEFT_ARM = (i: number) => <div key={i} className="left arm"></div>;
const CHEST = (i: number) => <div key={i} className="circle chest"></div>;
const BODY = (i: number) => <div key={i} className="circle body"></div>;
const BASE = (i: number) => <div key={i} className="base"></div>;

export const HANGMAN = [HEAD, HAT, CHEST, RIGHT_ARM, LEFT_ARM, BODY, BASE];
