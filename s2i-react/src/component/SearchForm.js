import React , {useState , useEffect} from "react"
import Books from "./Books"
import imgDef from "../img/defImg.jpg"
import {apiKey} from "../api.js"
import axios from "axios"


const SearchForm = () =>{
    const [search , setSearch] = useState("")
    const [query , setQuery] = useState("")
    const [booksArray , setBooksArray] = useState([])
    const [searchedBook , setSearchedBook] = useState([])
    const url = ` https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`
    
    const getBooks = async () =>{
        const response = await axios.get(url)
        const data = response.data.items
        setBooksArray(data)
        

    }
    useEffect(() => {
        getBooks().catch(err => {
            return(
                <h1>No Book Found</h1>
            )
        })
        localStorage.setItem("cronology" , searchedBook)
    } , [query , searchedBook]) 
    const handleChange = (e) =>{
        const value = e.target.value
        setSearch(value)
        console.log(search)
    }
    const handleSubmit= (e) => {
        e.preventDefault()
        if(search){
            setQuery(search)
            setSearchedBook([...searchedBook, query])
            console.log(query)
        }
        else(
            console.log("error")
        )
    }
    return(
        
        <>
            <form className="form" onSubmit={handleSubmit}>
                <input placeholder="Search a book" className="search-bar" type="text" value={search} onChange={handleChange}/>
                <button className="button">Search</button>
            </form>
            {booksArray.map((book) => {
                const data = book.volumeInfo
                console.log(data)
                return(
                    <div>
                        <Books title={data.title} author={data.authors ? data.authors : "No author available"} key={new Date().getTime().toString()} img={data.imageLinks ? data.imageLinks.smallThumbnail : imgDef} link={data.canonicalVolumeLink} p={data.description} publisher={data.publisher ? data.publisher : "No Publisher available"}/>
                    </div>
                    
                    
                )
            })}
        </>
    )
}


export default SearchForm