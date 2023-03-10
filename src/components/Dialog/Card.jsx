import { Border } from "./Border";
import "./Card";

export function Card({ icon, title, p }) {
  return (
    <div className="sobre-section">
      <span className="icon">
        <img src={`images/svg/${icon}Icon.svg`} />
      </span>
      <h2>{title}</h2>
      <Border width={120} color={"#977CED"} />
      <p>{p}</p>
    </div>
  );
}
