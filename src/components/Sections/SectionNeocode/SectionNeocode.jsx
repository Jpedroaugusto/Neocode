import { Card } from "../../Dialog/Card";
import { Description } from "../../Dialog/Description";
import "./neocode.scss";

export function SectionNeocode() {
  return (
    <section id="neocode">
      <Description
        bg="#E5E7EA"
        colorh1="#120736"
        colorh2="#977CED"
        colorText="#24292E"
        title="O que é a NeoCode"
        subtitle="sobre"
        p="Somos uma provedora de soluções de software personalizadas para diversas indústrias, incluindo saúde, finanças, varejo e manufatura. Com uma abordagem centrada no cliente e um compromisso com a inovação e qualidade, a empresa utiliza tecnologias emergentes, como inteligência artificial, aprendizado de máquina, blockchain e computação em nuvem para criar soluções personalizadas e eficazes. A transparência na comunicação e a ética nas operações também são valores fundamentais desta empresa. Promovendo o trabalho em equipe, colaboração e comunicação, a empresa busca oferecer soluções mais eficientes e melhores aos clientes. Em resumo, somos uma empresa inovadora e comprometida com a satisfação do cliente, com valores éticos e um foco na qualidade."
        btn={true}
        img={true}
        src="images/jpg/logo.jpeg"
      />

      <div className="sobre">
        <Card
          icon="Mission"
          title="Nosso propósito"
          p="Criar e fornecer soluções de software personalizadas para empresas de diversos setores, atendendo às suas necessidades específicas em aplicativos de desktop, aplicativos móveis, soluções de nuvem, sistemas de gerenciamento de banco de dados, software de análise de dados, sistemas de segurança cibernética e muito mais.
                "
        />

        <Card
          icon="Vision"
          title="Nossa visão"
          p="Ser reconhecida como líder no desenvolvimento de soluções tecnológicas inovadoras que transformam a maneira como as empresas fazem negócios. Utilizamos as mais recentes tecnologias emergentes, como inteligência artificial, aprendizado de máquina, blockchain e computação em nuvem, para criar soluções personalizadas e eficazes para empresas de diversos setores, como saúde, finanças, varejo e manufatura."
        />
      </div>
      <div className="values">
        <img />
        <h1>Nossos valores</h1>
        <ul style={{ listStyle: "revert" }}>
          <br />
          <li>
            <p>
              Inovação: Somos apaixonados por inovar e encontrar soluções
              criativas que resolvem problemas.
              <br />
              <br />
            </p>
          </li>
          <li>
            <p>
              Qualidade: Estamos comprometidos em entregar produtos e serviços
              de alta qualidade que excedem as expectativas dos clientes.
              <br />
              <br />
            </p>
          </li>
          <li>
            <p>
              Transparência: Somos 100% transparentes em nossa comunicação com
              os clientes, para que saibam exatamente o que estão recebendo e
              como estamos trabalhando para atender suas necessidades.
              <br />
              <br />
            </p>
          </li>
          <li>
            <p>
              Ética: Agimos com integridade e ética em todas as nossas
              operações, respeitando os direitos e privacidade dos clientes,
              funcionários e parceiros. Trabalho em equipe: Valorizamos o
              trabalho em equipe, promovemos a colaboração e a comunicação entre
              todos os membros da equipe para criar soluções melhores e mais
              eficientes.
              <br />
              <br />
            </p>
          </li>
          <li>
            <p>
              Foco no cliente: Estamos sempre focados em atender às necessidades
              dos clientes e fornecer soluções personalizadas e eficazes para
              seus problemas, garantindo sua satisfação e fidelidade.
              <br />
              <br />
            </p>
          </li>
        </ul>
        <p>
          Em cada projeto, em cada interação com nossos clientes, e em todas as
          nossas decisões, nossos valores norteiam nossas ações e refletem a
          cultura de nossa empresa.
        </p>
        <br />
        <br />
        <br />
        <hr />
      </div>
    </section>
  );
}
