import React from 'react'

class Books extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            bookId: ''
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
    }

    loadNewBook = () => {
        const id = parseInt(this.state.bookId)
        const bookIds = this.state.books.map((b) => b.id)
        const res = bookIds.some((elem) => elem === id)
        if (res) {
            alert("book alredy exists")
            return
        }
        console.log("res=", res)
        console.log("bookIds =", bookIds)
        console.log("loadNewBook", id)
        this.getBookData(id).then(result => {
            this.setState({ books: [...this.state.books, result] })
        })
    }

    handleChange(event) {
        console.log(event)
        this.setState({ bookId: event.target.value })
    }

    render() {
        const { books, bookId } = this.state;
        console.log(bookId)
        return (
            <div className="work-books">
                <input type="text" placeholder="enter id" value={this.state.bookId} onChange={this.handleChange} />
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
                            <tr key={book.id}>
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
export default Books
