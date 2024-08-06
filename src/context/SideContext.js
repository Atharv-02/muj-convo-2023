import React from "react";
import { useState } from "react";
import { createContext, useContext } from "react";

const Loadingcontext = createContext();
export function LoadingProv({ children }) {
  const [loading, setLoading] = useState(false);
  return (
    <Loadingcontext.Provider
      value={{
        loading: loading,
        setLoading: setLoading,
      }}
    >
      {children}
    </Loadingcontext.Provider>
  );
}
export const useLoading = () => useContext(Loadingcontext);
