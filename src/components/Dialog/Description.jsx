import { useState } from "react";
import { Border } from "./Border";
import "./Description.scss";

export function Description({
  bg,
  colorText,
  colorh1,
  colorh2,
  subtitle,
  title,
  p,
  img,
  btn,
  src,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleText = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ backgroundColor: bg }} className="description">
      <h1 style={{ color: colorh1 }}>{title}</h1>
      <h2
        style={{
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: colorh2,
        }}
      >
        {subtitle}
      </h2>
      <div>
        <Border width={100} color={"#977CED"} />
      </div>
      <div className="container">
        {img ? <img src={src} /> : <></>}
        <div className="description-paragraph">
          <p
            className={`txt ${isOpen ? "active" : ""}`}
            style={{
              color: colorText,
            }}
          >
            {p}
          </p>
          {btn ? (
            <button className="btn-description" onClick={toggleText}>
              {isOpen ? "Ler menos" : "Ler mais"}
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
