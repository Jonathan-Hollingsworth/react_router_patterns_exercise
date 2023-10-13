import React, { useState } from "react";
import { useHistory } from "react-router-dom"

function NewColorForm({addColor}) {
    const INITIAL_STATE = {
        name: '',
        value: "#000000"
      };

    const [formData, setFormData] = useState(INITIAL_STATE);
    const history = useHistory()
    
    function handleChange(evt){
        const { name, value } = evt.target;
        setFormData(fData => ({
          ...fData,
          [name]: value
        }));
    };

    function handleSubmit(evt){
        evt.preventDefault();
        addColor({...formData});
        setFormData(INITIAL_STATE);
        history.push("/")
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Color Name</label>
            <input id="name" name="name" type='text' value={formData.name} onChange={handleChange}/>
            <label htmlFor="value">Color Value</label>
            <input id="value" name="value" type='color' value={formData.value} onChange={handleChange}/>
            <button type="submit">Add Color</button>
        </form>
    )
}

export default NewColorForm