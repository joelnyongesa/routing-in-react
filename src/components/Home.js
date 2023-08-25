import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home(){
    const [quotes, setQuotes] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8001/quotes')
        .then(r=>r.json())
        .then(data=>setQuotes(data))
        .catch(e=>console.log(e))
    }, [])

    // Looping through the quotes.

    // After posting, Navigate('/home') to go to the home page

    return(
        <div>
            {
                quotes.map((quote)=>(
                    <div key={quote.id}>
                        <h1>{quote.author}</h1>
                        <button><Link to={`/quotes/${quote.id}`}>View Quote</Link></button>
                    </div>
                ))
            }
        </div>
    )
}


export default Home;