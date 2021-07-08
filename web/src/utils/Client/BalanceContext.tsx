import React, { useState, createContext, useEffect } from "react";
import { toast } from "react-toastify";

export const BalanceContext = createContext<
  [number, React.Dispatch<React.SetStateAction<number>>]
>([0, () => {}]);

export const BalanceProvider = (props?: any) => {
  const [balance, setBalance] = useState(0);

  async function getBalance() {
    let response = await fetch("/api/wallet/balance", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authToken: localStorage.authToken,
      },
    }).catch((err): any => {
      toast.error(err);
    });
    response = await response.json();
    setBalance(response.balance / 100);
  }

  useEffect(() => {
    getBalance();
  }, []);

  return (
    <BalanceContext.Provider value={[balance, setBalance]}>
      {props.children}
    </BalanceContext.Provider>
  );
};
