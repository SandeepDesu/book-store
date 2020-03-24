import React from 'react';
import { GetBooks } from '../../services/book';
import { GetCart, CreateCart, UpdateCart } from '../../services/cart';

export default class BookList extends React.Component {

    constructor() {
        super();
        this.state = {
            books: [],
            cartDetails: {}
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
        this.getCart();
    }

    getCart = () => {
        const userInfo = localStorage.getItem('userDetails');
        if (userInfo.length) {
            const userDetails = JSON.parse(userInfo);
            GetCart(userDetails._id).then((success) => {
                if (success.data !== '') {
                    console.log("if xondtion", success.data);
                    this.setState({ cartDetails: success.data });
                }
            });
        }

    }

    addToCart = (value) => {
        console.log(this.state.cartDetails);
        if (this.state.cartDetails.userId) {
            const orders = this.state.cartDetails.orders;
            const index = orders.findIndex((item) => item.itemId === value._id);
            if (index > -1) {
                orders[index].quantity++;
            } else {
                orders.push({
                    name: value.name,
                    itemId: value._id,
                    quantity: 1,
                    cost: value.cost,
                    currencyIn: value.currencyIn
                });
            }
 
            const cart = {
                ...this.state.cartDetails,
                orders: orders
            }

            UpdateCart(cart).then((success)=>{
                setTimeout(() => {
                    this.getCart();
                }, 1500);
            });

            // this.setState({
            //     cartDetails: {
            //         ...this.state.cartDetails,
            //         orders: orders
            //     }
            // })
        } else {
            const userInfo = localStorage.getItem('userDetails');
            if (userInfo.length) {
                const userDetails = JSON.parse(userInfo);
                const obj = {
                    userId: userDetails._id,
                    orders: [{
                        name: value.name,
                        itemId: value._id,
                        quantity: 1,
                        cost: value.cost,
                        currencyIn: value.currencyIn
                    }]
                }
                CreateCart(obj).then((success) => {
                    setTimeout(() => {
                        this.getCart();
                    }, 1000);
                });
                // this.setState({
                //     cartDetails: obj
                // });
            }
        }


    }

    render() {
        const listOfBooks = this.state.books.map((value, index) => {
            return (
                <div className="col-md-3 mt-2" key={`book-${index}`}>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{value.name.toUpperCase()}</h5>
                            <p className="card-text">{value.author.join(',')}</p>
                            <button type="button" className="btn btn-primary mr-2" onClick={() => this.addToCart(value)}>Add to cart</button>
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