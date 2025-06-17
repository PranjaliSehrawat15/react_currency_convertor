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
            className="min-h-screen  bg-cover bg-center  flex items-center justify-center"
  style={{
                backgroundImage: `url('https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg')`,
            }}
        >
           
                <div className=" backdrop-blur-sm rounded-lg p-6 w-[90%] max-w-md shadow-lg ">

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
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-gray-700 text-white px-2 py-0.5 "
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
                        <button type="submit"
                         className="w-full bg-gray-700
                          text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase() } to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        
    );
  }
export default App
