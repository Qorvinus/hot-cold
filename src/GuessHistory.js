import React from "react";

export default function(props) {
  console.log(props.guess);
  return (
    <div id="guessList" className="guessBox clearfix">
      {props.guess}
    </div>
  );
}
   
