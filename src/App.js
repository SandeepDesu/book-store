import React from 'react';

import SignUp from './components/signup/signup';
import SignIn from './components/signin/signin';
import AddBook from './admin/book/addBook';
import BookList from './user/dashboard/booklist';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        {/* <SignUp /> */}
        {/* <SignIn /> */}
        {/* <AddBook /> */}
        <BookList />
      </div>
    );
  }
}

export default App; 
