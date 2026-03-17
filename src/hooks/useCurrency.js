import { useEffect, useState } from "react";

export default function useCurrency (amount, fromCur, toCur) {

    const [converted, setConverted] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
    useEffect(function() {
            
            const controller = new AbortController();
            
            async function fetchCurrentRate() {
                
                setIsLoading(true);
                
                const res = await fetch(
              `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`, { signal: controller.signal }
            );
                
                const data = await res.json();
                
                setConverted(data.rates[toCur]);
                
                setIsLoading(false);
                
            }
            
            fetchCurrentRate();
            
            return function() {
          controller.abort();
        }
            
        }, [amount,fromCur,toCur]);

        return { converted, isLoading };

}