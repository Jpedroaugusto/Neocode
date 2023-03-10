export function Border({ color,width }) {
    return (
        <div>
            <span style={{display: 'block',width: width+'px',height: '3px',backgroundColor: color,borderRadius: '2px',}}/>
        </div>
    )
}