import axios from "axios"
import { apiKeyNYT } from "../api"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
const BestSeller = () => {
    const url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${apiKeyNYT}`
    const [bestSellers , setBestSellers] = useState([])
    const [date , setDate] = useState()
    const getBestSellers = async () => {
        const result = await axios.get(url)
        const data = result.data.results.books
        const date = result.data.results.bestsellers_date
        setBestSellers(data)
        setDate(date)

    }
    useEffect(() => {
        getBestSellers()
    } , [])
    return(
        <>
        <div className="best-seller">
            <h3>Rank List Date: {date}</h3>
            {
                bestSellers.map((bestSeller) => {
                    const {author , title, rank,  publisher} = bestSeller
                    let link = bestSeller.amazon_product_url
                    let p = bestSeller.description
                    let img = bestSeller.book_image
                    return(
                        <div key={new Date().getDate().toString()} style={{marginTop:"38px"}}>
                            <h3>Rank: {rank}</h3>
                            <h1>Title: {title}</h1>
                            <h2>Author: {author}</h2>
                            <img src={img}></img>
                            <Link to={`/books/${new Date().getTime().toString()}`} className="link-to" state={{title,
                                author,
                                img,
                                p,
                                publisher,
                                link}}>Read More</Link>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}
export default BestSeller