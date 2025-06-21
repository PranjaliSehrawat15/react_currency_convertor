import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import bgImage from './assets/bgImage.jpeg'


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
            className="min-h-screen  bg-cover bg-center  flex items-center justify-center px-4 "
  style={{
               backgroundImage: `url(${bgImage})`,
            }}
        >
           
    <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-6 max-w-xl text-white">

                        <h1 className=" text-white text-2xl font-bold text-center mb-4">Currency Converter</h1>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           convert()
                        }}
                    >
                        <div className="w-full mb-1 ">
                        {/* <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-4 shadow-inner text-black mb-4"> */}

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
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 
                                    border-1 border-white rounded-md  backdrop-blur-md  bg-gray-800 hover:bg-gray-900
                                    text-white px-3 py-1 z-10"


                                onClick={swap}
                            >
                                ⇅ swap
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
                                
                            </div>
                            )}

                       
                        <button
                        type="submit"
                        className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white px-4 py-3 rounded-lg font-semibold"
                        >
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>


                    </form>
                </div>
            </div>
        
    );
  }
export default App
