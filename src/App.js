import { useEffect, useState } from "react";

export default function App() {
  return (
    <main className="app">
      <div className="converter-card">
        <header className="header">
          <h1>Currency Converter</h1>
          <p className="description">
            Convert currencies instantly using real-time exchange rates.
          </p>
        </header>

        <div className="converter-form">
          <input
            type="number"
            placeholder="Enter amount"
            className="amount-input"
          />

          <div className="currency-row">
            <select className="currency-select">
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="CAD">CAD</option>
              <option value="INR">INR</option>
            </select>

            <span className="arrow">→</span>

            <select className="currency-select">
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="CAD">CAD</option>
              <option value="INR">INR</option>
            </select>
          </div>

          <div className="result">
            <p>OUTPUT</p>
          </div>
        </div>
      </div>
    </main>
  );
}