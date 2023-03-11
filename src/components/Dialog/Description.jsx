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
  let handle = true;
  const openText = () => {
    let txt = document.querySelector("p");
    let btn = document.querySelector(".btn-toggle");
    txt.classList.toggle("active");

    handle = !handle;

    handle ? (btn.innerHTML = "Ler mais") : (btn.innerHTML = "Ler menos");
  };

  return (
    <div
      style={{ backgroundColor: bg}}
      className="description"
    >
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
      <div className="flex">
        {img ? <img src={src} /> : <></>}
        <div className="container">
          <p
            className="txt"
            style={{
              color: colorText,
            }}
          >
            {p}
          </p>
          {btn ? (
            <button className="btn-description" onClick={() => openText()}>
              Ler mais
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
