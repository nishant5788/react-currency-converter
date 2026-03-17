export default function CurrencySelect({currency, setCurrency}) {
    return (
    <select className="currency-select" value={currency} onChange={(e) => setCurrency(e.target.value)}>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="CAD">CAD</option>
              <option value="INR">INR</option>
              <option value="PHP">PHP</option>
            </select>
    );
}
