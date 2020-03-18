import React from 'react';

import { GetBooks } from '../../services/book';

export default class BookList extends React.Component {

    constructor() {
        super();
        this.state = {
            books: []
        }
    }

    componentDidMount() {
        GetBooks().then((success) => {
            if (success && success.data && success.data.length) {
                this.setState({
                    books: success.data
                });
            }
        });
    }

    render() {
        const listOfBooks = this.state.books.map((value, index) => {
            return (
                <div className="col-md-3" key={`book-${index}`}>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{value.name}</h5>
                            <p className="card-text">{value.description}</p>
                        </div>
                    </div>
                </div>
            )
        });
        return (
            <div className="row">
                {listOfBooks}
            </div>
        )
    }
}