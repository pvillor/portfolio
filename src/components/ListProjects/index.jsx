import { useState } from "react"
import projects from "../../db/projects.db"
import Project from "../Project"
import { StyledListProjects } from "./style"

const ListProjects = () => {

    return(
        <StyledListProjects>
            {projects.map(project => {
                return(
                    <>
                    <Project 
                    name={project.name} 
                    image={project.image}
                    description={project.description}
                    techs={project.techs}
                    repository={project.repository}
                    visit={project.visit}/>
                    </>
                )
            })}
        </StyledListProjects>
    )
}

export default ListProjects