import { Border } from "./Border";
import "./Description.scss"

export function Description({bg,colorText,colorh1,colorh2,subtitle,title,p}) {
  return (
    <div
      style={{ backgroundColor: bg, width: "100%", padding: "15px 100px" }}
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
      <Border color={"#977CED"} />
      <p
        style={{
          color: colorText,
        }}
      >
        {p}
      </p>
    </div>
  );
}
