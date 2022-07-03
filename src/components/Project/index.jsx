import { CardProject, ProjectContent, StyledFooterProjects, Techs } from "./style"

const Project = ({ name, image, description, techs, repository, visit}) => {
    return(
        <CardProject>
            <ProjectContent>
                <img src={image} alt={name}/>
                <div>
                    <p>{description}</p>
                    <Techs>{techs.map(tech => <li>{tech}</li>)}</Techs>
                </div>
            </ProjectContent>
            <StyledFooterProjects>
                <a href={repository}><button>Código</button></a>
                <a href={visit}><button>Visitar</button></a>
            </StyledFooterProjects>
        </CardProject>
    )
}

export default Project