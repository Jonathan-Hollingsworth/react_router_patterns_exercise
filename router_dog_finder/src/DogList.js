import { Link } from "react-router-dom"

function DogList({dogs}) {
    return(
        <ul className="dogs">
            {dogs.map(dog => <li><Link to={`/dogs/${dog.name.toLowerCase()}`}>dog.name</Link></li>)}
        </ul>
    )
}

export default DogList