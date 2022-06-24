import React from "react";
import Stock from "./Stock";

function PortfolioContainer({stocks, onStockClick}) {
  const renderStocks = stocks.map(stock => {
    return <Stock 
              key={stock.id}
              id={stock.id}
              name={stock.name}
              ticker={stock.ticker}
              price={stock.price}
              isPortfolio={true}
              onStockClick={onStockClick}
            />
  });

  return (
    <div>
      <h2>My Portfolio</h2>
      {renderStocks}
    </div>
  );
}

export default PortfolioContainer;
