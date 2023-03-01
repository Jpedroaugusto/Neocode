import { Description } from "../../Dialog/Description"
import { Projects } from "./Projects"

import "./projects.scss"

export function SectionProjects() {
    return (
        <section id="projects">
            <Description
                bg="#fff"
                colorText="#24292E"
                colorh1="#120736"
                colorh2="#977CED"
                
                subtitle="projetos"
                title="O que já desenvolvemos"
                p="Duis suscipit nunc non eros tempus, eget tincidunt erat varius. Pellentesque nec eros efficitur, pretium nunc et, tempus mi. Suspendisse pharetra mi eu ipsum elementum."
            />
            
            <Projects/>
        </section>
    )
}