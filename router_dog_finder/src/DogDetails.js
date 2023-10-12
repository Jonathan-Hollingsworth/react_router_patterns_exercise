import { useParams } from "react-router-dom"

function DogDetails({dogsByName}) {
    const { name } = useParams()
    const dog = dogsByName[name]

    return(
        <div className="dog">
            <h1>{dog.name}</h1>
            <img src={`${dog.src}`}/>
            <br />
            <b>Age {dog.age}</b>
            <ul>
                {dog.facts.map(fact => <li>{fact}</li>)}
            </ul>
        </div>
    )
}

export default DogDetails