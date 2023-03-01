export function Border({ color }) {
    return (
        <div>
            <span style={{display: 'block',width: '100px',height: '4px',backgroundColor: color,borderRadius: '2px',}}/>
        </div>
    )
}