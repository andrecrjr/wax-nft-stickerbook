import React, { useState } from "react";
import { SettingsContext } from "./context";
import Album from "./components/Album";
import "./styles.css";

export default function App() {
  let ATOMIC_WAX_API = "https://wax.api.atomicassets.io/atomicassets/v1/";
  let sticks_by_page = 6;

  const [data] = useState({ sticks_by_page, ATOMIC_WAX_API });

  return (
    <SettingsContext.Provider value={data}>
      <Album />
    </SettingsContext.Provider>
  );
}
