import React, { createContext, useState } from "react";
import { Theme } from "../../styles/themes/Themes";

interface IThemeProps {
    children: React.ReactNode;
}

interface ItoggleProps {
    toggle: {
        colorPrimary: string;
        colorSecondary: string;
        color: string;
    };
    setToggle: React.Dispatch<
        React.SetStateAction<{
            colorPrimary: string;
            colorSecondary: string;
            color: string;
        }>
    >;
}
export const ThemeContextt = createContext<ItoggleProps>({} as ItoggleProps);

export const ThemeProviderr = ({ children }: IThemeProps) => {
    const [toggle, setToggle] = useState(Theme.themeLight);

    return (
        <ThemeContextt.Provider value={{ toggle, setToggle }}>
            {children}
        </ThemeContextt.Provider>
    );
};
