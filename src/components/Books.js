import React from 'react'
import loaderBooks from "../images/loaderBooks.gif"

class Books extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            bookId: '',
            activeBookId: 1,
            isLoading: false,
            error: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    getBookData = async (id) => {
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

    componentDidMount = () => {
        this.props.bookIds.forEach(bookId => {
            this.getBookData(bookId).then(result => {
                this.setState({ books: [...this.state.books, result] })
            })
        })
        let keysPressed = {}
        document.addEventListener('keyup', (event) => {
            delete keysPressed[event.key]
        })
        document.addEventListener("keydown", (event) => {
            keysPressed[event.key] = true
            if (keysPressed['Control'] && event.key == 'c') {
                this.setState({ activeBookId: this.state.books.length })
            }
            if (event.code == "ArrowUp") {
                let newId = this.state.activeBookId - 1
                console.log(newId)
                if (newId > 0) {
                    this.setState({ activeBookId: newId })
                }
            }
            if (event.code == "ArrowDown") {
                let newId = this.state.activeBookId + 1
                console.log(newId)
                if (newId <= this.state.books.length) {
                    this.setState({ activeBookId: newId })
                }
            }
        })
    }

    loadNewBook = () => {
        this.setState({ isLoading: true })
        const id = parseInt(this.state.bookId)
        const bookIds = this.state.books.map((b) => b.id)
        const res = bookIds.some((elem) => elem === id)
        if (res) {
            alert("book alredy exists")
            return
        }
        this.getBookData(id)
            .then(result => {
                this.setState({
                    isLoading: false,
                    error: "",
                    books: [...this.state.books, result]
                })
            }).catch((error) => {
                this.setState({
                    isLoading: false,
                    error: "No book"
                })
            })
    }

    handleChange(event) {
        this.setState({ bookId: event.target.value })
    }

    setActiveBookId(bookId) {
        this.setState({ activeBookId: bookId })
    }

    render() {
        const { books, bookId, activeBookId, isLoading, error } = this.state;
        return (
            <div className="work-books">
                {error && <div className="error">{error}</div>}
                {isLoading && <img className="loader" alt="loader" src={loaderBooks} />}
                <input type="text" placeholder="enter id" value={bookId} onChange={this.handleChange} />
                <button onClick={this.loadNewBook}>Load book</button>
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
                            <tr onClick={() => this.setActiveBookId(book.id)}
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
}
export default Books;