import React from "react";

function Coin({ name, icon, price, symbol }) {
  return (
    <div className="coin">
      <h3> Name: {name}</h3>
      <img src={icon} alt="img" />
      <h4> Price: {price}</h4>
      <h4> Symbol: {symbol}</h4>
    </div>
  );
}

export default Coin;
