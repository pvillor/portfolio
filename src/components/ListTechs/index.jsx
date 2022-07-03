import skills from "../../db/techs.db"
import Tech from "../../Tech"
import { CardTech, StyledListTechs } from "./style"

const ListTechs = () => {
    return(
        <StyledListTechs>
        {skills.map(skill => {
            return(
                <CardTech>
                    <h4>{skill.name}</h4>
                    <Tech skill={skill.techs}/>
                </CardTech>
                )
            })}
        </StyledListTechs>
    )
}

export default ListTechs