import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { ContainerToggle } from "./ToggleStyle";
import { useContext } from "react";
import { ThemeContextt } from "../../contexts/themeContext/ThemeContext";
import { Theme } from "../../styles/themes/Themes";

export const Toggle = (): JSX.Element => {
    const { toggle, setToggle } = useContext(ThemeContextt);

    const handleTheme = () => {
        setToggle(
            toggle !== Theme.themeLight ? Theme.themeLight : Theme.themeDark
        );
    };
    return (
        <ContainerToggle
            onClick={() => handleTheme()}
            title="mude o tema a seu agrado"
        >
            {toggle == Theme.themeLight ? (
                <BsFillSunFill />
            ) : (
                <BsFillMoonStarsFill />
            )}
        </ContainerToggle>
    );
};
