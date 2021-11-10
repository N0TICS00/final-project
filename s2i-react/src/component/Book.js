import { useLocation} from "react-router"
import { Link } from "react-router-dom"


const Book = () => {
    const location = useLocation()
    const data = location.state

    return(

            <div className="item" key={new Date().getTime().toString()}>
            <img src={data.img} ></img>
            <h1>{data.title}</h1>
            <h2>{data.author}</h2>
            <h3>{data.publisher}</h3>
            <p>{data.p ? data.p : "No description available"}</p>
            <div>
            <Link to="/">
                <button className="button-book">Search another book</button>
            </Link>
            <a href={data.link}><button className="button-book">Go to Google Books/Amazon</button></a>
            </div>
        </div>

    
    )
}

export default Book