import { Toggle } from "../toggle/toggle";
import { MyHeader } from "./HeaderStyles";
import logo from "../../assets/logo.png";

const Header = (): JSX.Element => {
    return (
        <MyHeader>
            <a href="/">
                <img src={logo} alt="logo do site" title="logo do site" />
            </a>
            <Toggle />
        </MyHeader>
    );
};

export default Header;
