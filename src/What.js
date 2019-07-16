import React from "react";

export default function(props) {
  return (
    <section>
      <h2>What do I do?</h2>
      <p>
        This is a Hot or Cold Number Guessing Game. The game goes like this.
      </p>
      <ol>
        <li>
          I pick a <span>random secret number</span> between 1 to 100 and keep
          it hidden
        </li>
        <li>
          You need to <span>guess</span> until you can find the hidden secret
          number.
        </li>
        <li>
          You will <span>get feedback</span> on how close ("hot") or far
          ("cold") your guess is.
        </li>
      </ol>
      <p>So, Are you ready?</p>
      <button onClick={props.game}>Got it!</button>
    </section>
  );
}
