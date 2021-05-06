import React, { useState, useEffect } from 'react'
import loaderBooks from '../../assets/images/loaderBooks.gif'
import PropTypes from 'prop-types'

function Books({ bookIds }) {
    const [books, setBooks] = useState([])
    const [bookId, setBookId] = useState("")
    const [activeBookId, setActiveBookId] = useState(1)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        bookIds.forEach((bookId) => {
            getBookData(bookId).then(result => {
                setBooks((books) => [...books, result])
            })
        })

        let keysPressed = {}
        document.addEventListener('keyup', (event) => {
            delete keysPressed[event.key]
        })
        document.addEventListener("keydown", (event) => {
            keysPressed[event.key] = true
            if (keysPressed['Control'] && event.key == 'c') {
                setActiveBookId(books.length)
            }
            if (event.code == "ArrowUp") {
                let newId = activeBookId - 1
                console.log(newId)
                if (newId > 0) {
                    setActiveBookId(newId)
                }
            }
            if (event.code == "ArrowDown") {
                let newId = activeBookId + 1
                console.log(newId)
                if (newId <= books.length) {
                    setActiveBookId(newId)
                }
            }
        })
    }, [])

    const getBookData = async (id) => {
        const result = await fetch(`https://anapioficeandfire.com/api/books/${id}`)
        const data = await result.json()
        console.log("data", data)
        return {
            id: id,
            name: data.name,
            authors: data.authors,
            country: data.country,
            publisher: data.publisher,
            mediaType: data.mediaType
        }
    }

    const loadNewBook = () => {
        setIsLoading(true)
        const id = parseInt(bookId)
        const bookIds = books.map((b) => b.id)
        const res = bookIds.some((elem) => elem === id)
        if (res) {
            alert("book alredy exists")
            return
        }
        getBookData(id)
            .then(result => {
                setIsLoading(false)
                setError("")
                setBooks([...books, result])
            }).catch((error) => {
                setIsLoading(false)
                setError("No book")
            })
    }

    function handleChange(event) {
        setBookId(event.target.value)
    }
    console.log(activeBookId)
    return (
        <div className="work-books">
            {error && <div className="error">{error}</div>}
            {isLoading && <img className="loader" alt="loader" src={loaderBooks} />}
            <input type="text" placeholder="enter id" value={bookId} onChange={handleChange} />
            <button onClick={loadNewBook}>Load book</button>
            <table>
                <thead>
                    <tr>
                        <th>Number book</th>
                        <th>Name book</th>
                        <th>Authors</th>
                        <th>Country</th>
                        <th>Publisher</th>
                        <th>Media Type</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) =>
                        <tr onClick={() => setActiveBookId(book.id)}
                            className={(book.id === activeBookId) ? "selectedElement" : ""}
                            key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.name}</td>
                            <td>{book.authors}</td>
                            <td>{book.country}</td>
                            <td>{book.publisher}</td>
                            <td>{book.mediaType}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

Books.propTypes = {
    bookIds: PropTypes.array
}
export default Books;