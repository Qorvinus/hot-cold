import React from "react";

export default function(props) {
  return (
    <nav>
      <ul className="clearfix">
        <li>
          <a className="what" href="#" onClick={props.what}>
            What ?
          </a>
        </li>
        <li>
          <a className="new" href="#" onClick={() => window.location.reload()}>
            + New Game
          </a>
        </li>
      </ul>
    </nav>
  );
}
