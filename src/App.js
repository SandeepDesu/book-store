import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import SignUp from './components/signup/signup';
import SignIn from './components/signin/signin';
import AddBook from './admin/book/addBook';
import BookList from './user/dashboard/booklist';
import AdminDashboard from './admin/dashboard/dashboard';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container mt-5">
          <Switch>

            <Route path="/login">
              <SignIn />
            </Route>

            <Route path="/register">
              <SignUp />
            </Route>

            <AdminAuthentication path="/addbook">
              <AddBook />
            </AdminAuthentication>

            <AdminAuthentication path="/dashboard">
              <AdminDashboard />
            </AdminAuthentication>

            <UserAuthentication path="/list">
              <BookList />
            </UserAuthentication>
          </Switch>
        </div>
      </Router>
    );
  }
}


function AdminAuthentication(props) {
  const role = localStorage.getItem('role');
  if (role === 'admin') {
    return (
      <Route path={props.path}>
        {props.children}
      </Route>
    )
  } else {
    return (
      <h1>You dont have permission for this route</h1>
    )
  }
}


function UserAuthentication(props) {
  const role = localStorage.getItem('role');
  if (role === 'user') {
    return (
      <Route path={props.path}>
        {props.children}
      </Route>
    )
  } else {
    return (
      <h1>You dont have permission for this route</h1>
    )
  }
}

export default App; 
