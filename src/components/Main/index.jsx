import ListProjects from "../ListProjects"
import ListTechs from "../ListTechs"
import { AboutMe, Ore, StyledMain, TextsAboutMe, Topics } from "./style"

const Main = () => {
    return(
        <>
        <StyledMain>
            <section id="aboutMe">
                <Topics>Sobre mim</Topics>
                <AboutMe>
                    <Ore src="ore.jfif" alt="Paulo Victor" />
                    <TextsAboutMe>
                        <h2>Paulo Victor Guerra</h2>
                        <p>Sempre fui ligado ao mundo dos games. Gosto da área de tecnologia porque é um universo gigante, cheio de possibilidades, a partir do qual muitas soluções de problemas foram e são desenvolvidas. Sou Desenvolvedor Front End, estudando Desenvolvimento Full Stack e Engenharia de Software. Gosto de aprender e pretendo aprimorar habilidades técnicas e interpessoais, com o intuito de solucionar problemas.</p>
                    </TextsAboutMe>
                </AboutMe>
            </section>
            <section id="projects">
                <Topics>Projetos</Topics>
                <div>
                    <ListProjects />
                </div>
            </section>
            <section id="techs">
                <Topics>Tecnologias</Topics>
                <div>
                    <ListTechs />
                </div>
            </section>
        </StyledMain>
        </>
    )
}

export default Main