import { Link } from "react-router-dom"

function ColorIndex({colors}) {
    return (
        <ul>
            {colors.map((c) => <li key={c.id}><Link to={`/colors/${c.name.toLowerCase()}`}>{c.name}</Link></li>)}
        </ul>
    )
}

export default ColorIndex