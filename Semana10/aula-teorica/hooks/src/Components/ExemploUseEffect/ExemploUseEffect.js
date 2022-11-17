import { Fragment, useEffect, useState } from "react";
import axios from "axios";

function ExemploUseEffect (props) {
    const {userId} = props
    const [description , setDescription] = useState({})
    useEffect(() => {
        const request = async () =>{
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/posts/${userId}`
                )
                setDescription(response.data)
        }
        request()
    }, [userId]);
    return <p>{JSON.stringify(description)}</p>
}

export default ExemploUseEffect