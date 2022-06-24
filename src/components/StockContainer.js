import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, onStockClick}) {
  const renderStocks = stocks.map(stock => {
    return <Stock 
              key={stock.id}
              id={stock.id}
              name={stock.name}
              ticker={stock.ticker}
              price={stock.price}
              isPortfolio={false}
              onStockClick={onStockClick}
            />
  });

  return (
    <div>
      <h2>Stocks</h2>
      {renderStocks}
    </div>
  );
}

export default StockContainer;
