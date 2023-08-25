import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Details(){
    let {id} = useParams()
    const [quote, setQuote] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:8001/quotes/${id}`)
        .then(r=>r.json())
        .then(data=>setQuote(data))
        .catch(e=>console.log(e))
    }, [])

    return(
        <div>
           <h4>{quote.author}</h4>
           <p>{quote.quote}</p>
        </div>
    )
}

export default Details