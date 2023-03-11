import { useState } from "react";
import { Border } from "../../Dialog/Border";
import React from "react";

import projects from "./ProjectsArray";

export function Projects() {
  const [buttonState, setButtonState] = useState(
    projects.reduce((obj, _, index) => ({ ...obj, [index]: true }), {})
  );

  const openText = (i) => {
    const handle = buttonState[i];
    setButtonState({ ...buttonState, [i]: !handle });
    let txt = document.querySelectorAll(".text");
    let btn = document.querySelectorAll(".btn-project");

    txt[i].classList.toggle("active");
    btn[i].innerHTML = buttonState[i] ? "Ler menos" : "Ler mais";
  };

  return (
    <div className="projects">
      {projects.map((project, index) => (
        <div key={`project${index}`} className="project">
          <img src={project.src} />
          <div className="description-project">
            <h1>{project.name}</h1>
            <h2>{project.theme}</h2>
            <div>
              <Border width={100} color={"#977CED"} />
            </div>
            <div className="text">
              {project.p.map((p, i) => (
                <React.Fragment key={`paragraph-${i}`}>
                  <p>{p}</p>
                  <br />
                </React.Fragment>
              ))}
            </div>
            <button onClick={() => openText(index)} className="btn-project">
              Ler mais
            </button>
            <div className="tools">
              <h3>Ferramentas</h3>
              <div className="tools__icons">
                {project.tools.map((tool, index) => (
                  <img
                    className="tools__icons--icon"
                    key={`image${index}`}
                    src={tool}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
