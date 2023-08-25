import { useNavigate } from "react-router-dom"

function NotFound(){
    let navigate = useNavigate()
    // You do not have to use it on a button...

    return(<div>
        <h1>404 ERROR</h1>
        <h1>Page Not Found</h1>
        <button onClick={()=>{navigate('/')}}>Back to Quotes</button>
    </div>)
}

export default NotFound