import {  Link } from "react-router-dom"
import App from "../App"
import Book from "./Book"
import imgDef from "../img/defImg.jpg"
import  PropTypes  from "prop-types"
const Books = ({title , author , img , p , link , publisher}) => {

    return(
        <div className="item">
              <img src={img} />
            <h1>Title: {title}</h1>
            <h2>Author(s): {author}</h2>
            <h3>Publisher: {publisher}</h3>
            <Link to={ `/books/${new Date().getTime().toString()}`}
               style={{display:"block"}} state={{title , author , img , p , link }}>
                        Read More 
            </Link>           
        </div>
    )
}


export default Books