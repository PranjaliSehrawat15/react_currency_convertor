import React from 'react'
import {useId} from 'react';

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions =[],
    selectCurrency="usd",
    amountDisable=false,
    currencyDisable=false,
    className = "",
}) {
   const amountInputId = useId()

    return (
        <div className={`bg-black/50 backdrop-blur-md  p-4 rounded-xl text-sm flex shadow-inner ${className}`}>


            <div className="w-1/2">
                <label htmlFor ={amountInputId}
                 className="text-white text-lg mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-gray
                     py-1.5 text-white px-2 rounded-md"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount === 0 ? "" : amount}
                    onChange={(e) => onAmountChange && 
                        onAmountChange(Number(e.target.value)|| 0)}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-white/50 mb-2 w-full">Currency Type</p>
                <select
           className="rounded-lg px-2 py-1 bg-gray-800 text-white cursor-pointer outline-none uppercase"
           value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)
                    }
                    disabled ={currencyDisable}
                >
                    
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
