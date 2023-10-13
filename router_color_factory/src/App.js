import { Switch, Route, Redirect, Link } from "react-router-dom"
import { v4 as uuid } from 'uuid';
import React, { useState } from "react";
import NewColorForm from "./NewColorForm";
import ColorDisplay from "./ColorDisplay";
import ColorIndex from "./ColorIndex";
import './App.css';

function App() {
  const initialColors = []

  const [colors, setColors] = useState(initialColors)

  function addColor(color) {
      let newColor = {...color, id: uuid()}
      setColors(colors => [...colors, newColor])
  }

  const colorsByName = {}
  for (const color of colors) {
    colorsByName[color.name.toLowerCase()] = color
  }
  console.log(colorsByName)

  return (
    <div className="App">
      <h1>Color Factory</h1>
      <Link to="/colors/new">Add a Color</Link>
      <br />
      <Link to="/colors">View all Colors</Link>
      <hr />
      <Switch>
        <Route exact path="/colors/new"><NewColorForm addColor={addColor}/></Route>
        <Route exact path="/colors/:color"><ColorDisplay colorsByName={colorsByName}/></Route>
        <Route exact path="/colors"><ColorIndex colors={colors}/></Route>
        <Redirect to="/colors" />
      </Switch>
    </div>
  );
}

export default App;
