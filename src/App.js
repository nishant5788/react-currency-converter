import { useEffect, useState } from "react";

export default function App() {
    
    const [amount, setAmount] = useState(1);
    const [currency, setCurrency] = useState("");
    
    useEffect(function(){
        
        async function fetchCurrentRate() {
            
            const res = await fetch(`https://api.frankfurter.app/latest?amount=100&from=INR&to=USD`);
            
            const data = await res.json();
            
            console.log(data);
        }
        
        fetchCurrentRate();
        
    }, []);
    
    console.log(currency)
    
    
  return (
    <main className="app">
      <div className="converter-card">
        <Header />

        <div className="converter-form">
          <AmountInput amount={amount} setAmount={setAmount}  />

          <div className="currency-row">
            <CurrencySelect currency={currency} setCurrency={setCurrency} />

            <span className="arrow">→</span>

            <CurrencySelect currency={currency} setCurrency={setCurrency} />
          </div>

          <Result amount={amount} />
      
        </div>
      </div>
    </main>
      
      
  );
}

function Header() {
    return(
    <header className="header">
          <h1>Currency Converter</h1>
          <p className="description">
            Convert currencies instantly using real-time exchange rates.
          </p>
        </header>
    );
}

function AmountInput({amount, setAmount}) {
    return(
        <input
            type="number"
            placeholder="Enter amount"
            className="amount-input"
            value={amount}
            onChange={(e) => setAmount(e.target.value) }
          />
          
    );
}


function CurrencySelect({currency, setCurrency}) {
    return (
    <select className="currency-select" onChange={(e) => setCurrency(e.target.value)}>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="CAD">CAD</option>
              <option value="INR">INR</option>
            </select>
    );
}

function Result({amount}) {
    return(
    <div className="result">
            <p>{amount}</p>
          </div>
    );
}

