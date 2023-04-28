import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Globalstyles } from "./Globalstyle.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Globalstyles />
        <App />
    </React.StrictMode>
);
