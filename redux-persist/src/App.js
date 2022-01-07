import "./App.css";

import Intervalo from "./components/Intervalo";
import Soma from "./components/Soma";
import Media from "./components/Media";
import Sorteio from "./components/Sorteio";

function App() {
  return (
    <div className="App">
      <h1>Aula Redux</h1>
      <div className="row">
        <Intervalo></Intervalo>
      </div>
      <div className="row">
        <Soma />
        <Media/>
        <Sorteio/>
      </div>
    </div>
  );
}

export default App;
