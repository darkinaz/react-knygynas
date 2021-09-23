
import React from "react";


function Books(props) {

    return (
        <div className="books">
            <img className="img" src={props.data.img} alt="#"/>
            <div className="title">{props.data.title}</div>
            <div className="author">Author: {props.data.author}</div>
            <div className="price">{props.data.price} EUR</div>
            <button className="button" type="button" onClick={(e) => {e.preventDefault(); window.location.href='http://google.com';}}>Pirkti!</button>
        </div>
    )
}







export default Books;