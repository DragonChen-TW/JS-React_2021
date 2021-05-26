import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from 'react-router-dom';

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function App() {
  return (
    <Router path='/user'>
      <QueryExample />
    </Router>
  )
};

function QueryExample() {
  let query = useQuery();
  return (
    <div>
      <h2>Accounts</h2>

      <ul>
        <li>
          <Link to="/user?name=apple">Apple</Link>
        </li>
        <li>
          <Link to="/user?name=dragon">Dragon</Link>
        </li>
        <li>
          <Link to="/user?name=noobtw">NoobTW</Link>
        </li>
        <li>
          <Link to="/user?name=someone-empty">Someone Empty</Link>
        </li>
      </ul>

      <UserProfile name={query.get('name')} />
    </div>
  );
}

const userDataBase = {
  apple: 'Hello, I\'m apple. I am from supermarket.',
  dragon: 'Hi, I am DragonChen from Taiwan.',
  noobtw: 'Yo, It is noob in the building.'
}

function UserProfile({ name }) {
  return (
    <div>
      <h3>UserName: {name}</h3>
      <h4>Intro: {userDataBase[name] || 'Not Found'}</h4>
    </div>
  );
}
