import { Description } from "../../Dialog/Description";
import { Carousel } from "./Carousel";
import "./team.scss";

export function SectionTeam() {
  return (
    <section id="team">
      <Description
        bg="#24292E"
        colorh1="#D4C9F8"
        colorh2="#977CED"
        colorText="#E5E7EA"
        subtitle="equipe"
        title="Quem forma nossa equipe"
        p="Esta equipe de desenvolvimento de software é composta por desenvolvedores altamente motivados e apaixonados por programação. Eles trabalham em conjunto para criar soluções inovadoras e de alta qualidade, sempre buscando por novas tecnologias e ferramentas. São obcecados por resolver problemas difíceis e enfrentam desafios com entusiasmo e determinação. Sua paixão pela tecnologia e a busca por criar algo novo e único os motiva a trabalhar duro todos os dias, tornando-os a personificação da inovação e da criatividade. Se você busca uma equipe de software altamente qualificada, que valoriza a excelência e a colaboração, esta equipe é a escolha certa para você."
        btn={true}
      />

      <Carousel />
    </section>
  );
}
