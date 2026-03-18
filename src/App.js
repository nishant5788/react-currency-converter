import { useState } from "react";
import useCurrency from './hooks/useCurrency';
import Header from './components/Header';
import CurrencySelect from './components/CurrencySelect';
import AmountInput from './components/AmountInput';
import Result from './components/Result';
import SwapCurrencies from './components/SwapCurrencies';
import Loader from './components/Loader';

export default function App() {
    
    const [amount, setAmount] = useState(1);
    const [fromCur, setFromCur] = useState("PHP");
    const [toCur, setToCur] = useState("INR");
    
   const { converted, isLoading } = useCurrency(amount, fromCur, toCur);

   function handleSwap() {
  setFromCur(toCur);
  setToCur(fromCur);
}
    
  return (
      <>
    <main className="app">
      <div className="converter-card">
      
      { isLoading && <Loader /> }
      
        <Header />

        <div className="converter-form">
          <AmountInput amount={amount} setAmount={setAmount}  />

          <div className="currency-row">
            <CurrencySelect currency={fromCur} setCurrency={setFromCur} />

            <SwapCurrencies onSwapCurrency = {handleSwap} />

            <CurrencySelect currency={toCur} setCurrency={setToCur} />
          </div>

          <Result amount={converted} />
      
        </div>
      </div>
    </main>
      </>
  );
}






