import { useState } from "react";

function ExemploUseState() {
    const [name, setName] = useState([])
  return <div>
    <p>{name}</p>
    <button onClick={
        () => setName(name.push("Octavio"))
    }>Muda Ladeira</button>
    <button onClick={ 
        () => setName(name.push("Ladeira"))
        }>Muda Octavio</button>
  </div>;
}

export default ExemploUseState