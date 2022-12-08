const HEAD = (
  <div key={1} className="circle face">
    <div className="right eye"></div>
    <div className="left eye"></div>
    <div className="nose"></div>
  </div>
);
const HAT = <div key={2} className="hat"></div>;
const RIGHT_ARM = <div key={4} className="right arm"></div>;
const LEFT_ARM = <div key={5} className="left arm"></div>;
const CHEST = <div key={3} className="circle chest"></div>;
const BODY = <div key={6} className="circle body"></div>;
const BASE = <div key={7} className="base"></div>;

export const HANGMAN = [HEAD, HAT, CHEST, RIGHT_ARM, LEFT_ARM, BODY, BASE];
