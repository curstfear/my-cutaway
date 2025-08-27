import { useState } from "react";
import "./style.scss";

export default function FlipCard({ front, back }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="card" onClick={() => setFlipped(!flipped)}>
      <div className={`card__inner ${flipped ? "is-flipped" : ""}`}>
        <div className="card__front">
          <h5>{front}</h5>
          <p className="card__hint">Click me!</p>
        </div>
        <div className="card__back">
          <p>{back}</p>
        </div>
      </div>
    </div>
  );
}
