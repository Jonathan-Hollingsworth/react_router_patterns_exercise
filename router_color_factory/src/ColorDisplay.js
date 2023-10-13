import { useParams } from "react-router-dom"

function ColorDisplay({colorsByName}) {
    const { color } = useParams()
    const currentColor = colorsByName[color]

    return(
        <div className="color" style={{backgroundColor: currentColor.value, height: 400}}>
            <div style={{backgroundColor: "#ffffff"}}>
                <b>This is what {currentColor.name} looks like!</b>
                <br />
                <b>Do you like it?</b>
            </div>
        </div>
    )
}

export default ColorDisplay