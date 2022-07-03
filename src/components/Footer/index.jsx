import { StyledFooter } from './style';
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { Link } from "react-scroll";

const Footer = () => {
    return(
        <StyledFooter>
            <div>
                <a href="https://www.linkedin.com/in/paulovictorguerra/" target="blank">
                    <BsLinkedin />
                </a>
                <Link to='styledHeader'><button>Paulo Victor</button></Link>
                <a href="https://github.com/pvillor" target="blank">
                    <BsGithub />
                </a>
            </div>
            <p>Desenvolvido por Paulo Victor Guerra - 2022 - Todos os direitos reservados</p>
        </StyledFooter>
    )
}

export default Footer