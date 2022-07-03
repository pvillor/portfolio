import { TechsList } from "./style"

const Tech = ({ skill }) => {
    return(
        <TechsList>
        {skill.map(tech => {
            return(
                <>
                    <li>{tech}</li>
                </>
            )})}
        </TechsList>
    )
}

export default Tech