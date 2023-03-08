import "./home.scss"

export function SectionHome({background}) {
    return (
        <section style={{backgroundImage: `url(images/png/${background}.png)`}} id="home">
            <div className="introduction">
                <h1>Soluções e serviços<br/>em tecnologia</h1>
            </div>
        </section>
    )
}