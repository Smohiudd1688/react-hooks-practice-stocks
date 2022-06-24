import React from "react";

function Stock({id, name, ticker, price, isPortfolio, onStockClick}) {
  function handleClick() {
    onStockClick(id, isPortfolio);
  }

  return (
    <div>
      <div onClick={handleClick} className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
