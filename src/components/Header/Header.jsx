import "./header.scss";

export function Header() {
    window.addEventListener('scroll',() => {
        const header = document.querySelector('header');
        header.classList.toggle('sticky',window.scrollY > 0);

    });

    function getDistanceFromTheTop(element) {
        const id = element.getAttribute("href");
        return document.querySelector(id).offsetTop;
    }

    
    function scrollToSection(event) {
        event.preventDefault();
        let links = document.querySelectorAll(".link");

        const distanceFromTheTop = getDistanceFromTheTop(event.target) - 70;
        smoothScrollTo(0, distanceFromTheTop, 1400);
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
            }
            window.scroll(newX, newY);
        }, 1000 / 60);
    }

    function menu() {
        const navList = document.querySelector('.nav-list');
        const mobileMenu = document.querySelector('.mobile-menu');
        let links = document.querySelectorAll('.item-list');

        links.forEach(link => {
            link.addEventListener('click', () => {
                setTimeout(() => {
                    menu()
                },900);
            });
        })

        mobileMenu.classList.toggle('active')
        navList.classList.toggle('active');
    
        navList.style.cssText = "transition: transform 0.3s ease-out;"
        
        setTimeout(() => {
            if(!navList.classList.contains("active")) navList.style.cssText = "transition: none;"
        },1000)

        links.forEach(link => {
            link.style.animation ? link.style.animation = "" : link.style.animation = 'navLinkFade 0.5s ease forwards 0.3s';
        });
    }

    return (
        <header>
            <nav>
                <a href='#neocode' className="logo-mobile"><img src='images/png/LogoNavBar.png'/></a>
                <ul className="nav-list">
                    <li key="Op1" className="item-list"><a className="link" onClick={scrollToSection} href="#neocode">neocode</a></li>
                    <li key="Op2" className="item-list"><a className="link" onClick={scrollToSection} href="#team">equipe</a></li>
                    <li key="Op3" className="item-list"><a className="link" onClick={scrollToSection} href="#services">serviços</a></li>
                    <li key="Op4" className="item-list"><a className="link" href="#"><img onClick={scrollToSection} href="#home" src='images/png/LogoNavBar.png'/></a></li>
                    <li key="Op5" className="item-list"><a className="link" onClick={scrollToSection} href="#projects">projetos</a></li>
                    <li key="Op6" className="item-list"><a className="link" onClick={scrollToSection} href="#contact">contato</a></li>
                    <li key="Op7" className="item-list"><a className="link" href="/blog">blog</a></li>
                </ul>

                <div onClick={menu} className="mobile-menu">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        </header>
    );
}