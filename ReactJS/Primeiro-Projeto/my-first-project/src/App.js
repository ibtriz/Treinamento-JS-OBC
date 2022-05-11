import "./App.css";
import Exercise from "./components/exercise";
import Leagueofvillains from "./components/shared/villainList";

function App() {
  return(
    <div className="App">
      <div id="content">
      <Exercise></Exercise>
        <Leagueofvillains></Leagueofvillains>
      </div>
      </div>
      );
}

export default App;
