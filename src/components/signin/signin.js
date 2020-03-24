import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { Auth } from '../../services/auth';
class SignIn extends React.Component {
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
                localStorage.setItem('userDetails', JSON.stringify(success.data.details));
                if (success.data.details.role === 'admin') {
                    this.props.history.push('/admin/dashboard');
                } else {
                    this.props.history.push('/user/list');
                }
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
                <Link className="btn btn-primary ml-2" to="/register">Register</Link>
            </form>
        )
    }
}

export default withRouter(SignIn);