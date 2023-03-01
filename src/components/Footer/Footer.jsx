import "./footer.scss"

export function Footer() {
    return (
        <footer>
            <div>
                <ul>
                <a href="https://www.linkedin.com/company/neo-code-solutions/" target="_blank"><img className='ico--social' src="images/svg/sociais/linkedin.svg"/></a>
                    <li><a href="#">Ipsum</a></li>
                    <li><a href="#">Dolor</a></li>
                </ul>
            </div>
            <p><b>©2023 - NeoCode Solutions.</b> Todos os direitos reservados.</p>
        </footer>
    );
}