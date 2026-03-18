import { useEffect, useState } from "react";

export default function useCurrency(amount, fromCur, toCur) {
  const [converted, setConverted] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchCurrentRate() {
        try {
          setIsLoading(true);

          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`,
            { signal: controller.signal },
          );

          if (!res.ok)
            throw new Error("Something went wrong with Fetching Currencies!");

          const data = await res.json();

          if (data.Response === "False")
            throw new Error("Response is not Found!");

          setConverted(data.rates[toCur]);

          setIsLoading(false);
        } catch (err) {
          console.log(err);
        } finally {
          setIsLoading(false);
        }
      }

      fetchCurrentRate();

      return function () {
        controller.abort();
      };
    },
    [amount, fromCur, toCur],
  );

  return { converted, isLoading };
}
