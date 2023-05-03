import { Toggle } from "../toggle/toggle";
import { MyHeader } from "./HeaderStyles";



const Header = (): JSX.Element => {
    
    return (
        <MyHeader>
            <h3>Header</h3>
            <Toggle/>
        </MyHeader>
    );
};

export default Header;
