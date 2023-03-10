import "./footer.scss";

export function Footer() {
  return (
    <footer>
      <div>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/company/neo-code-solutions/"
              target="_blank"
            >
              <img
                className="ico--social"
                src="images/svg/sociais/linkedin.svg"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/neocodesolutions/"
              target="_blank"
            >
              <img
                className="ico--social"
                src="images/svg/sociais/instagram.svg"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/neo-code-solutions/"
              target="_blank"
            >
              <img
                className="ico--social"
                src="images/svg/sociais/youtube.svg"
              />
            </a>
          </li>
        </ul>
      </div>
      <p>
        <b>©2023 - NeoCode Solutions.</b> Todos os direitos reservados.
      </p>
    </footer>
  );
}
