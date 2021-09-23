import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Books from './books';

function App() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('https://in3.dev/knygos/')
            .then(function (response) {
                console.log(response.data);
                setBooks(response.data);
            })
    }, []);
   

    return (
        <div>
            <div className="books-container">
            {books.map((book)=>(<Books key={book.id} data={book}></Books>))}
            </div>
        </div>
    )
}



export default App;