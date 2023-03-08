import "./mobileMenu.scss";

export default function MobileMenu() {
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

        mobileMenu.classList.toggle('active')^

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
        <div onClick={menu} className="mobile-menu">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
    )
}