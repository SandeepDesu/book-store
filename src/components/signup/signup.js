import React from 'react';
import { Register } from '../../services/user';
export default class SignUp extends React.Component {

    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            phoneNumber: 0,
            username: '',
            password: '',
            address: ''
        }
    }

    changeText = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    submit = () => {
        Register(this.state).then((success) => {
        });
    }

    render() {
        return (
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="firstName">FirstName</label>
                        <input type="text" className="form-control" id="firstName" name="firstName" placeholder="FirstName" onChange={this.changeText} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="lastName">LastName</label>
                        <input type="text" className="form-control" id="lastName" placeholder="LastName" name="lastName" onChange={this.changeText} />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="email" className="form-control" id="username" placeholder="Username" name="username" onChange={this.changeText} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" name="password" onChange={this.changeText} />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="phoneNumber">PhoneNumber</label>
                        <input type="text" className="form-control" id="phoneNumber" name="phoneNumber" placeholder="PhoneNumber" onChange={this.changeText} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="address">Address</label>
                        <input type="text" className="form-control" id="address" name="address" placeholder="Address" onChange={this.changeText} />
                    </div>
                </div>
                <button type="button" className="btn btn-primary" onClick={this.submit}>Sign UP</button>
            </form>
        )
    }
}