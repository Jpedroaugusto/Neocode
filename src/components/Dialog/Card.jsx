import { Border } from "./Border";

export function Card({icon, title, p}) {
    return (
        <div className='sobre-section'>
            <span className='icon'><img src={`images/svg/${icon}Icon.svg`}/></span>
            <h2>{title}</h2>
            <div>
                <Border color={'#977CED'}/>
            </div>
            <p>{p}</p>
        </div>
    );
}