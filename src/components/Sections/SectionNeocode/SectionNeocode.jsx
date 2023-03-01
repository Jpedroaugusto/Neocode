import { Card } from "../../Dialog/Card";
import { Description } from "../../Dialog/Description";
import "./neocode.scss"

export function SectionNeocode() {
    return (
        <section id='neocode'>
            <Description 
                bg='#E5E7EA'
                colorh1="#120736"
                colorh2="#977CED"
                colorText="#24292E"
                
                title="O que é a NeoCode" 
                subtitle="sobre" 
                p="Duis suscipit nunc non eros tempus, eget tincidunt erat varius. Pellentesque nec eros efficitur, pretium nunc et, tempus mi. Suspendisse pharetra mi eu ipsum elementum."
            />

            <div className="sobre">
                <Card 
                icon="Mission"
                title="Nosso propósito"
                p="Transformar as necessidades e potencialidades de pessoas, grupos, comunidades e organizações em projetos sociais sustentáveis, nas áreas de Saúde, Educação e Tecnologia para gerar autonomia e bem estar integral." 
                />

                <Card 
                icon="Vision"
                title="Nossa visão"
                p="Transformar as necessidades e potencialidades de pessoas, grupos, comunidades e organizações em projetos sociais sustentáveis, nas áreas de Saúde, Educação e Tecnologia para gerar autonomia e bem estar integral."
                />

                <Card 
                icon="Values"
                title="Nosso valores"
                p="Transformar as necessidades e potencialidades de pessoas, grupos, comunidades e organizações em projetos sociais sustentáveis, nas áreas de Saúde, Educação e Tecnologia para gerar autonomia e bem estar integral."
                />
            </div>
        </section>
    )
}