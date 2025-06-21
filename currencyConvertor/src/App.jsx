import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {
const[amount,setAmount] =useState(0)
const[from,setFrom]= useState("usd")
const[to,setTo] =useState("inr")
const[convertedAmout, setConvertedAmount] = useState(0)

const currencyInfo=useCurrencyInfo(from)
 
const options = Object.keys(currencyInfo)
const swap  =() =>{
  setFrom(to)
  setTo(from)
  setConvertedAmount(amount)
  setAmount(convertedAmout)
}
const convert =() => { 
  setConvertedAmount(amount * currencyInfo[to])
}

return (
   <div
            className="min-h-screen  bg-cover bg-center  flex items-center justify-center  "
  style={{
               backgroundImage: `url('https://t3.ftcdn.net/jpg/01/93/30/78/360_F_193307850_Ohzn4ILra9FbnqNaEgR0Dz0iprl0crJr.jpg')`,
            }}
        >
           
                <div className=" backdrop-blur-lg rounded-lg p-6 w-[90%] max-w-md shadow-lg ">
                        <h1 className=" text-white text-2xl font-bold text-center mb-4">Currency Converter</h1>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert()
                        }}
                    >
                        <div className="w-full mb-1 ">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                selectCurrency={from}
                                onCurrencyChange={(currency) =>
                                  setFrom(currency)}

                                onAmountChange={(amount) => setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5 ">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-gray-700 hover:bg-gray-800 text-white px-2 py-0.5 "
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmout}
                                currencyOptions={options}
                                selectCurrency={to}

                                onCurrencyChange={(currency) =>
                                  setTo(currency)}
                                amountDisable
                            />
                              </div>
                            {currencyInfo[to] && (
                            <div className="text-center text-md p-2  text-white mb-2">
                                <p>1 {from.toUpperCase()} = {currencyInfo[to]} {to.toUpperCase()}</p>
                                {amount > 0 && (
                                <p>{amount} {from.toUpperCase()} = {(amount * currencyInfo[to]).toFixed(4)} {to.toUpperCase()}</p>
                                )}
                            </div>
                            )}

                       
                        <button
                        type="submit"
                        className="w-full bg-gray-700 hover:bg-gray-800 transition-all duration-300 text-white px-4 py-3 rounded-lg font-semibold"
                        >
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>


                    </form>
                </div>
            </div>
        
    );
  }
export default App
