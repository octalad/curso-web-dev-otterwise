import { Fragment, useState } from "react";

function Exercicio1 () {
    const [count, changeCount] = useState(0)
    return(
        <Fragment>
            <div>
                <p>{count}</p>
                <button onClick={ () => {changeCount(count + 1)}}>+1</button>
                <button onClick={ () => {changeCount(count - 1)}}>-1</button>
            </div>
        </Fragment>
    )
}

export default Exercicio1