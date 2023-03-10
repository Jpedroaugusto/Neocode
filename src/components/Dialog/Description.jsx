import { Border } from "./Border";

export function Description({ bg, colorText, colorh1, colorh2, subtitle, title, p, fontSize }) {
    return (
        <div style={{backgroundColor: bg,width: '100%'}} className="description">
            <h1 style={{color: colorh1}}>{title}</h1>
            <h2 style={{fontSize: '16px',letterSpacing: '0.1em',textTransform: 'uppercase',color: colorh2}}>{subtitle}</h2>
            <Border color={'#977CED'}/>
            <p style={{color: colorText,fontSize: fontSize+'px'}}>{p}</p>
        </div>
    );
}