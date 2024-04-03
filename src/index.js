import React from "react";
import ReactDOM from "react-dom/client";
import { PokemonProvider } from "./context/PokemonContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <PokemonProvider>
      <App />
    </PokemonProvider>
  </React.StrictMode>
);
