import axios from "axios"
import { apiKeyNYT } from "../api"
import { useState } from "react"
const BestSeller = () => {
    const url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${apiKeyNYT}`
    const [bestSellers , setBestSellers] = useState([])
    const getBestSellers = async () => {
        const result = await axios.get(url)
        const data = result.data.results.books
        console.log(data)
        data.map((book) => {
            setBestSellers([{}])
        })
    }
    getBestSellers()
    return(
        <>
        <div className="best-seller">Ciao</div>
        </>
    )
}
export default BestSeller