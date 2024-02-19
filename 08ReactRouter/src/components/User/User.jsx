import {useParams} from "react-router-dom";

export default function User() {
    
    const {userId} = useParams() //useParams cha use hotoy...Route chya ithe :xyz is dynamic part
    //which we can take via useParams()

    return (
        <>
            <h1 className="text-2xl text-center my-10 font-mono"> User: {userId}</h1>
        </>
    )
}
