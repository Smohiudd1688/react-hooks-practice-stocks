import React, {useEffect, useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [filteredStocks, setFilteredStocks] = useState([]);
  const [isFilter, setIsFilter] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then(response => response.json())
    .then(stocks => setStocks(stocks));
  }, []);

  function handleStockClick(id, isPortfolio) {
    if (!isPortfolio) {
      const newPortfolio = stocks.find(stock => {
        return stock.id === id;
      });

      setPortfolio([...portfolio, newPortfolio]);  
    } else {
      const updatedPortfolio = portfolio.filter(stock => {
        return stock.id !== id;
      });

      setPortfolio(updatedPortfolio); 
    }
  }

  function handleSort(sort) {
    if (sort === "Alphabetically") {
      if (isFilter) {
        const sortedStocks = [...filteredStocks];
        sortedStocks.sort((a,b) => {
          if (a.ticker < b.ticker) {
            return -1;
          }
          if (a.ticker > b.ticker) {
            return 1
          }
          return 0;
        });

        setFilteredStocks(sortedStocks);

      } else {
        const sortedStocks = [...stocks];
        sortedStocks.sort((a,b) => {
          if (a.ticker < b.ticker) {
            return -1;
          }
          if (a.ticker > b.ticker) {
            return 1
          }
          return 0;
        });

        setStocks(sortedStocks);
      }
    } else {
      if (isFilter) {
        const sortedStocks = [...filteredStocks];
        sortedStocks.sort((a,b) => {
          return a.price - b.price;
        });

        setFilteredStocks(sortedStocks);

      } else {
        const sortedStocks = [...stocks];
        sortedStocks.sort((a,b) => {
          return a.price - b.price;
        });
      }
    }
  }

  function handleFilter(filter) {
    setIsFilter(true);

    const updatedStocks = stocks.filter(stock => {
      return stock.type === filter;
    });

    setFilteredStocks(updatedStocks);
  }

  return (
    <div>
      <SearchBar onSortChange={handleSort} onFilterChange={handleFilter} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={!isFilter ? stocks : filteredStocks} 
                          onStockClick={handleStockClick}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer 
                          stocks={portfolio} 
                          onStockClick={handleStockClick} 
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
