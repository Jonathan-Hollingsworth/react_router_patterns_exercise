import { Link } from "react-router-dom"

function Nav({dogs}) {
    return (
        <nav>
            <Link to='/'>Home</Link>
            {dogs.map(dog => <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>)}
        </nav>
    )
}

export default Nav