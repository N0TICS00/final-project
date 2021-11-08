import axios from "axios"
import { apiKeyNYT } from "../api"
import { useState, useEffect } from "react"
const BestSeller = () => {
    const url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${apiKeyNYT}`
    const [bestSellers , setBestSellers] = useState([])
    const getBestSellers = async () => {
        const result = await axios.get(url)
        const data = result.data.results.books
        setBestSellers(data)
    }
    useEffect(() => {
        getBestSellers()
    } , [])
    return(
        <>
        <div className="best-seller">
            {
                bestSellers.map((bestSeller) => {
                    const {author , title } = bestSeller
                    return(
                        <div key={new Date().getDate().toString()}>
                            <h1>{author}</h1>
                            <h2>{title}</h2>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}
export default BestSeller