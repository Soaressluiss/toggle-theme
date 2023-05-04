import { BsGithub, BsLinkedin } from "react-icons/bs";
import { DevContainer, FooterContainer, SpanInfo } from "./FooterStyles";

const Footer = () => {
    return (
        <FooterContainer>
            <p>
                &copy; <SpanInfo>Toggle Theme</SpanInfo> - todos os direitos
                reservados - 2023
            </p>
            <DevContainer aria-label="sessão referente as informações sobre o desenvolvedor">
                <h5>
                    Desenvolvido com ❤ por <SpanInfo>Luís Soares</SpanInfo>
                </h5>
                <ul>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/luissoaresdeveloper/"
                            aria-label="Link do linkedin do desenvolvedor"
                            target="_blank"
                        >
                            <BsLinkedin style={{ color: "#0e76a8" }} />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/Soaressluiss"
                            aria-label="Link do github do desenvolvedor"
                            target="_blank"
                        >
                            <BsGithub style={{ color: "#FF69B4" }} />
                        </a>
                    </li>
                </ul>
            </DevContainer>
        </FooterContainer>
    );
};

export default Footer;
