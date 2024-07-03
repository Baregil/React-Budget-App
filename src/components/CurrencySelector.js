import React, { useContext , useState, useEffect} from 'react';
import { AppContext } from '../context/AppContext';


const CurrencySelector = () => {
  const { currency, dispatch } = useContext(AppContext);
  const [selectedCurrency, setSelectedCurrency] = useState({ symbol: '$', label: 'Dollar' });

  const currencyOptions = [
    { symbol: "$", label: "Dollar" },
    { symbol: "£", label: "Pound" },
    { symbol: "€", label: "Euro" },
    { symbol: "₹", label: "Rupee" }
  ];

  useEffect(() => {
    const currentCurrency = currencyOptions.find(option => option.symbol === currency);
    if (currentCurrency) {
      setSelectedCurrency(currentCurrency);
    }
  }, [currency]);

  const handleCurrencyChange = (event) => {
    const selected = event.target.value;
    dispatch({
      type: 'CHG_CURRENCY',
      payload: selected
    });
    const currentCurrency = currencyOptions.find(option => option.symbol === selected);
    setSelectedCurrency(currentCurrency);
  };

  return (
    <div className="currency-selector">
      <span>
        <select value={currency} onChange={handleCurrencyChange}>
          {currencyOptions.map(({ symbol, label }) => (
            <option key={symbol} value={symbol}>
              {symbol} {label}
            </option>
          ))}
        </select>
      </span>
    </div>
  );
};

export default CurrencySelector;
