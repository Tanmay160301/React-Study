import {useParams} from "react-router-dom";

export default function User() {
    
    const {userId} = useParams()

    return (
        <>
            <h1 className="text-2xl text-center my-10 font-mono"> User: {userId}</h1>
        </>
    )
}
