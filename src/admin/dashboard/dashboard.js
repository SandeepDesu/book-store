import React from 'react';
import { GetBooks, UpdateBook, DeleteBook } from '../../services/book';

export default class AdminDashboard extends React.Component {

    constructor() {
        super();
        this.state = {
            books: [],
            isBookAvailable: false,
            selectedBook: {}
        }
    }

    componentDidMount() {
        this.getBooks();
    }

    getBooks = () => {
        GetBooks().then((success) => {
            if (success && success.data && success.data.length) {
                this.setState({
                    books: success.data
                });
            }
        });
    }

    selectBook = (book) => {
        this.setState({ isBookAvailable: true, selectedBook: book });
    }

    back = () => {
        this.setState({ isBookAvailable: false, selectedBook: {} });
    }

    changeText = (event) => {
        this.setState({
            selectedBook: {
                ...this.state.selectedBook,
                [event.target.name]: event.target.value
            }
        });
    }

    edit = () => {
        UpdateBook(this.state.selectedBook).then((success) => {
            this.back();
            this.getBooks();
        });
    }

    delete = () => {
        DeleteBook(this.state.selectedBook._id).then((success) => {
            this.back();
            this.getBooks();
        });
    }

    render() {
        const listOfBooks = this.state.books.map((value, index) => {
            return (
                <li className="list-group-item" key={`bookItem-${index}`} onClick={() => this.selectBook(value)}>{value.name}</li>
            )
        });
        return (
            <div className="row">
                <div className="col-md-4">
                    <ul className="list-group">
                        {listOfBooks}
                    </ul>
                </div>
                {this.state.isBookAvailable ? <div className="col-md-8">
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="name">Book Name</label>
                                <input type="text" className="form-control" id="name" name="name" placeholder="Book Name" onChange={this.changeText} value={this.state.selectedBook.name} />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="author">Author</label>
                                <input type="text" className="form-control" id="author" placeholder="Author" name="author" onChange={this.changeText} value={this.state.selectedBook.author} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="cost">Cost</label>
                            <input type="text" className="form-control" id="cost" placeholder="Cost" name="cost" onChange={this.changeText} value={this.state.selectedBook.cost} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="currencyIn">CurrencyIn</label>
                            <input type="text" className="form-control" id="currencyIn" placeholder="CurrencyIn" name="currencyIn" onChange={this.changeText} value={this.state.selectedBook.currencyIn} />
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="description">Description</label>
                                <input type="text" className="form-control" id="description" name="description" placeholder="Description" onChange={this.changeText} value={this.state.selectedBook.description} />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="imageUrl">ImageUrl</label>
                                <input type="text" className="form-control" id="imageUrl" name="imageUrl" placeholder="ImageUrl" onChange={this.changeText} value={this.state.selectedBook.imageUrl} />
                            </div>
                        </div>
                        <button type="button" className="btn btn-primary mr-2" onClick={this.edit}>Edit Book</button>
                        <button type="button" className="btn btn-primary mr-2" onClick={this.delete}>Delete Book</button>
                        <button type="button" className="btn btn-primary mr-2" onClick={this.back}>Back</button>
                    </form>
                </div> : null}
            </div>
        )
    }
}