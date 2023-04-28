import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { ContainerToggle } from "./ToggleStyle";

export const Toggle = (): JSX.Element => {
    return (
        <ContainerToggle>
            <BsFillSunFill />
            <BsFillMoonStarsFill />
        </ContainerToggle>
    );
};
