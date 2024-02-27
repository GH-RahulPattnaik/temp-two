"use client"
import React, { useState } from 'react';

interface Currency {
  value: string;
  label: string;
}

const currencies: Currency[] = [
  { value: 'AUD', label: 'Australia (AUD $)' },
  { value: 'CAD', label: 'Canada (CAD $)' },
  { value: 'EUR', label: 'France (EUR €)' },
  { value: 'EUR', label: 'Germany (EUR €)' },
  { value: 'GBP', label: 'United Kingdom (GBP £)' },
  { value: 'USD', label: 'United States (USD $)' },
];

export default function CurrencySelector() {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCurrency(event.target.value);
  };

  return (
    <div className='bg-transparent'>
      <select id="currency-selector" value={selectedCurrency} onChange={handleChange} className='px-3 py-2 bg-transparent border border-black dark:border-white'>
        {currencies.map((currency) => (
          <option key={currency.value} value={currency.value} className='bg-transparent dark:bg-zinc-900 dark:text-white text-black'>
            {currency.label}
          </option>
        ))}
      </select>
    </div>
  );
}
