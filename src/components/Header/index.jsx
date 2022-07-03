import { Link } from "react-scroll"
import { StyledHeader } from "./style"

const Header = () => {

    return(
        <StyledHeader id="styledHeader">
            <h3>Paulo Victor</h3>
            <div>
                <Link to="aboutMe"><button>Sobre mim</button></Link>
                <span>|</span>
                <Link to="projects"><button>Projetos</button></Link>
                <span>|</span>
                <Link to="techs"><button>Tecnologias</button></Link>
            </div>
        </StyledHeader>
    )
}

export default Header