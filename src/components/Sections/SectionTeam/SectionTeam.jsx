import { Description } from "../../Dialog/Description";
import { TeamCarousel } from "./Carousel"
import "./team.scss";

export function SectionTeam() {
    return (
        <section id="team">
            <Description
                bg="#24292E"
                colorh1="#D4C9F8"
                colorh2="#977CED"
                colorText="#E5E7EA"
                
                subtitle='equipe'
                title='Quem forma nossa equipe'
                p='Duis suscipit nunc non eros tempus, eget tincidunt erat varius. Pellentesque nec eros efficitur, pretium nunc et, tempus mi.'
            />
            
            <TeamCarousel />
        </section>
    )
}