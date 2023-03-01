import { Border } from "../../Dialog/Border";

export function Projects() {
    const tools = {
        HTML: "images/svg/technologies/HtmlIcon.svg",
        CSS: "images/svg/technologies/CssIcon.svg",
        JavaScript: "images/svg/technologies/JavaScriptIcon.svg",
        TypeScript: "images/svg/technologies/TypeScriptIcon.svg",
        Csharp: "images/svg/technologies/CsharpIcon.svg",
        ReactJs: "images/svg/technologies/ReactJsIcon.svg",
        Sass: "images/svg/technologies/SassIcon.svg"
    }

    const projects = [
        {
            name: "Nome do projeto",
            theme: "Sistema web",
            p: "Duis suscipit nunc non eros tempus, eget tincidunt erat varius. Pellentesque nec eros efficitur, pretium nunc et, tempus mi. Suspendisse pharetra mi eu ipsum elementum.",
            src: "images/svg/MockupPlaceholderIcon.svg",
            tools: [tools.ReactJs,tools.Sass,tools.Sass,tools.Sass,tools.Sass,tools.Sass]
        },
        {
            name: "Nome do projeto",
            theme: "Sistema web",
            p: "Duis suscipit nunc non eros tempus, eget tincidunt erat varius. Pellentesque nec eros efficitur, pretium nunc et, tempus mi. Suspendisse pharetra mi eu ipsum elementum.",
            src: "images/svg/MockupPlaceholderIcon.svg",
            tools: [tools.ReactJs,tools.Sass]
        }
    ];

    return (
        <div className="projects">
            {
                projects.map((project,index) => (
                    <div key={`project${index}`} className="project">
                        <img src={project.src}/>
                        <div className="description-project">
                            <h1>{project.name}</h1>
                            <h2>{project.theme}</h2>
                            <p>{project.p}</p>
                            <Border color={'#977CED'}/>
                            <h3>Ferramentas</h3>
                            <div className="tools">
                                {
                                    project.tools.map((tool,index) => (
                                        <a key={`image${index}`} href="#">
                                            <img 
                                            width={50} 
                                            src={tool}
                                            />
                                        </a>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}