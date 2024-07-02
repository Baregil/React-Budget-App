import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelector = () => {
  const { currency, dispatch } = useContext(AppContext);
  const currencies = ["$", "£", "€", "₹"];

  const handleCurrencyChange = (event) => {
    dispatch({
      type: 'CHG_CURRENCY',
      payload: event.target.value
    });
  };

  return (
    <div>
    <span>
      <select value={currency} onChange={handleCurrencyChange}>
        {currencies.map((currencyOption) => (
          <option key={currencyOption} value={currencyOption}>
            {currencyOption}
          </option>
        ))}
      </select>
      Currency: {currency}
      </span>
    </div>
  );
};

export default CurrencySelector;
