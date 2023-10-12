import { Switch, Route, Redirect} from "react-router-dom"
import Nav from "./Nav";
import DogList from "./Doglist";
import DogDetails from "./DogDetails";
import './App.css';

function App({dogs}) {
  const dogsByName = {}
  for (const dog of dogs) {
    dogsByName[dog.name.toLowerCase()] = dog
  }
  
  return (
    <div className="App">
      <Nav dogs={dogs} />
      <Switch>
        <Route exact path="/dogs" >
          <DogList dogs={dogs}/>
        </Route>
        <Route path="/dogs/:name" >
          <DogDetails dogsByName={dogsByName} />
        </Route>
        <Redirect to="/dogs" />
      </Switch>
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: "/whiskey.jpg",
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: "/duke.jpg",
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: "/perry.jpg",
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: "/tubby.jpg",
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
