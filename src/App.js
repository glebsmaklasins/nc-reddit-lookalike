
import './App.css';
import Nav from "./components/Nav"
import Landing from "./components/Landing"
import {Router} from "@reach/router"

function App() {
  return (
    <div className="App">
    <Nav/>
    <Router >
      <Landing path="/"/>
      <Landing path="/:sorted/"/>
    </Router>
    </div>
  );
}

export default App;
