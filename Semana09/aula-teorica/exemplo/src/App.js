import { Fragment } from "react";
import "./App.css";
import Card from "./components/Card/Card";

function App() {
  return (
    <Fragment>
      <Card name="Octavio" description="Descrição do Octavio" age="18">
        <p>O Octavio atualmente estuda web development na otterwise</p>
      </Card>
      <Card name="Octavio" description="Descrição do Octavio" age="18" />
      <Card name="Diego" description="Descrição do Diego">
        <button>Enviar</button>
      </Card>

      <Card name="Carol" description="Descrição da Carol" />
      <Card name="Guilherme" description="Descrição do Guilherme" />
      <Card name="André" description="Descrição do André" />
    </Fragment>
  );
}

export default App;
