import { Fragment, useState } from "react";

function Exercicio2 () {
    const [name, setName] = useState(true)
    console.log(name);
    return(
        <Fragment>
            <div>
                {name? <p>Octavio Ladeira</p> : ""}
                <button onClick={ () => {
                    setName(!name) 
                }}>Clica</button>
            </div>
        </Fragment>
    )
}

export default Exercicio2