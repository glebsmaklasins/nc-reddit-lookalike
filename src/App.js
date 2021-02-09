
import './App.css';
import Nav from "./components/Nav"
import Landing from "./components/Landing"
import ArticlePage from "./components/ArticlePage"
import Article from "./components/singlearticlePage/Article"
import {Router} from "@reach/router"

function App() {
  return (
    <div className="App">
    <Nav/>
    <Router >
      <Landing path="/"/>
      <Landing path="/:sorted/"/>
      <ArticlePage path="/articles/:article_id"/>
 
    </Router>
    </div>
  );
}

export default App;
