import axios from "axios";
import { Fragment, useEffect, useState } from "react";

function Exercicio3 (props) {
    const [type, setType] = useState("")
    const [description, setDescription] = useState("")
    useEffect(() => {
        const request = async () =>{
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/${type}`
                )
                setDescription(response.data)
        }
        request()
    }, [type]);
    console.log(type);
    return(
    <Fragment>
        <div>
            <p>{JSON.stringify(description)}</p>
            <button onClick={ () => {
                setType("")
            }}>Todos</button>
            <button onClick={ () => {
                setType("users")
            }}>User</button>
            <button onClick={ () => {
                setType("posts")
            }}>Posts</button>
        </div>
    </Fragment>
    )
}

export default Exercicio3