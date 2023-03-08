import Link from "./Link"

export default function NavListHome() {
    function getDistanceFromTheTop(element) {
        const id = element.getAttribute("href");
        return document.querySelector(id).offsetTop;
    } 

    let click = 0;


    function scrollToSection(event) {
        event.preventDefault();
        click++
        console.log(click)
        const distanceFromTheTop = getDistanceFromTheTop(event.target) - 70;
        if(click == 1) {
            smoothScrollTo(0, distanceFromTheTop, 1400);
        }
    }

    function smoothScrollTo(endX, endY, duration) {
        const startX = window.scrollX || window.pageXOffset;
        const startY = window.scrollY || window.pageYOffset;
        const distanceX = endX - startX;
        const distanceY = endY - startY;
        const startTime = new Date().getTime();
    
        duration = typeof duration !== "undefined" ? duration : 400;
    
        const easeInOutQuart = (time, from, distance, duration) => {
            if ((time /= duration / 2) < 1) {
                return (distance / 2) * time * time * time * time + from;
            } else {
                return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
            }
        };
        
        const timer = setInterval(() => {
            const time = new Date().getTime() - startTime;
            const newX = easeInOutQuart(time, startX, distanceX, duration);
            const newY = easeInOutQuart(time, startY, distanceY, duration);
            if (time >= duration) {
                clearInterval(timer);
                setTimeout(() => {
                    click = 0;
                },100)
            }
            window.scroll(newX, newY);
        }, 1000 / 60);
    }

    return (
        <nav>
            <ul className="nav-list">
                <Link type='text' behavior={true} onClick={scrollToSection} link='#neocode' legend='neocode'/>
                <Link type='text' behavior={true} onClick={scrollToSection} link='#team' legend='equipe'/>
                <Link type='text' behavior={true} onClick={scrollToSection} link='#services' legend='serviços'/>
                <Link type='image' behavior={true} onClick={scrollToSection} link='#home' src='images/png/LogoNavBar.png'/>
                <Link type='text' behavior={true} onClick={scrollToSection} link='#projects' legend='projetos'/>
                <Link type='text' behavior={true} onClick={scrollToSection} link='#contact' legend='contato'/>
                <Link type='text' behavior={true} link='/blog' legend='blog'/>
            </ul>
        </nav>
    )
}