import React from 'react';
import { Auth } from '../../services/auth';
export default class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    changeText = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submit = () => {
        Auth(this.state).then((success) => {
            if (success && success.data && success.data.token) {
                localStorage.setItem('token', success.data.token);
                localStorage.setItem('role', success.data.details.role);
            }
        });
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="username">Enter email</label>
                    <input type="email" className="form-control" id="username" placeholder="Enter email" name="username" onChange={this.changeText} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" name="password" onChange={this.changeText} />
                </div>
                <button type="button" className="btn btn-primary" onClick={this.submit}>Sign IN</button>
            </form>
        )
    }
}