import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
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
            <Route exact path="/">
              <Redirect
                to={{
                  pathname: "/login"
                }}
              />
            </Route>

            <Route path="/login">
              <SignIn />
            </Route>

            <Route path="/register">
              <SignUp />
            </Route>

            <AdminAuthentication path="/admin/addbook">
              <AddBook />
            </AdminAuthentication>

            <AdminAuthentication path="/admin/dashboard">
              <AdminDashboard />
            </AdminAuthentication>

            <UserAuthentication path="/user/list">
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
    localStorage.clear();
    return (<Redirect
      to={{
        pathname: "/login"
      }}
    />)
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
    localStorage.clear();
    return (<Redirect
      to={{
        pathname: "/login"
      }}
    />)
  }
}

export default App; 
