import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { CreateBook } from '../../services/book';
class AddBook extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            author: '',
            cost: '',
            currencyIn: '',
            description: '',
            imageUrl: ''
        }
    }

    changeText = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submit = () => {
        const book = {
            name: this.state.name,
            author: [this.state.author],
            cost: this.state.cost,
            currencyIn: this.state.currencyIn,
            description: this.state.description,
            imageUrl: this.state.imageUrl
        };
        CreateBook(book).then((success) => {
            if (success.data.message === 'success') {
                this.props.history.push('/admin/dashboard');
            }
        });
    }

    render() {
        return (
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="name">Book Name</label>
                        <input type="text" className="form-control" id="name" name="name" placeholder="Book Name" onChange={this.changeText} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="author">Author</label>
                        <input type="text" className="form-control" id="author" placeholder="Author" name="author" onChange={this.changeText} />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="cost">Cost</label>
                    <input type="text" className="form-control" id="cost" placeholder="Cost" name="cost" onChange={this.changeText} />
                </div>
                <div className="form-group">
                    <label htmlFor="currencyIn">CurrencyIn</label>
                    <input type="text" className="form-control" id="currencyIn" placeholder="CurrencyIn" name="currencyIn" onChange={this.changeText} />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="description">Description</label>
                        <input type="text" className="form-control" id="description" name="description" placeholder="Description" onChange={this.changeText} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="imageUrl">ImageUrl</label>
                        <input type="text" className="form-control" id="imageUrl" name="imageUrl" placeholder="ImageUrl" onChange={this.changeText} />
                    </div>
                </div>
                <button type="button" className="btn btn-primary" onClick={this.submit}>Add Book</button>
                <Link className="btn btn-primary ml-2" to="/admin/dashboard">Dashboard</Link>
            </form>
        )
    }
}

export default withRouter(AddBook);