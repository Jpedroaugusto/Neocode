export function Border({ color,width }) {
    return (
        <div>
            <span style={{display: 'block',width: width+'px',height: '4px',backgroundColor: color,borderRadius: '2px',}}/>
        </div>
    )
}