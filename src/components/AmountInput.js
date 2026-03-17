export default function AmountInput({amount, setAmount}) {
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