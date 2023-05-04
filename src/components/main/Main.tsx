import { ContainerMain, WrapperImg } from "./MainStyles";
import avatar from "../../assets/avatar.svg";
const Main = () => {
    return (
        <ContainerMain>
            <WrapperImg>
                <h4>Theme toggle with Styled Components</h4>
                <img src={avatar} alt="avatar" />
            </WrapperImg>
        </ContainerMain>
    );
};

export default Main;
