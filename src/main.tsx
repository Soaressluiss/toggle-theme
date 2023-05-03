import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Globalstyles } from "./styles/Globalstyle.ts";
import { ThemeProviderr } from "./contexts/themeContext/ThemeContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ThemeProviderr>
            <Globalstyles />
            <App />
        </ThemeProviderr>
    </React.StrictMode>
);
