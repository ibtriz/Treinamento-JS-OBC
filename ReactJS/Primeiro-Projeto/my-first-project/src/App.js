import "./App.css";
import "./components/RickandMortyIpsun";
import RickandMortyIpsun from "./components/RickandMortyIpsun";
import Title from "./components/title";

function App() {
  return (
    <div className="App">
      <div id="content">
        <Title></Title>
        <RickandMortyIpsun></RickandMortyIpsun>
      </div>
    </div>
  );
}

export default App;
