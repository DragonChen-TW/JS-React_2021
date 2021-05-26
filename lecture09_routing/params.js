import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from 'react-router-dom';

// Params are placeholders in the URL that begin
// with a colon, like the `:id` param defined in
// the route in this example. A similar convention
// is used for matching dynamic segments in other
// popular web frameworks like Rails and Express.

export default function ParamsExample() {
  return (
    <Router>
      <div>
        <h2>Accounts</h2>

        <ul>
          <li>
            <Link to="/user/apple">Apple</Link>
          </li>
          <li>
            <Link to="/user/dragon">Dragon</Link>
          </li>
          <li>
            <Link to="/user/noobtw">NoobTW</Link>
          </li>
          <li>
            <Link to="/user/someone-empty">Someone Empty</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/user/:name" children={<UserProfile />} />
        </Switch>
      </div>
    </Router>
  );
}

const userDataBase = {
  apple: 'Hello, I\'m apple. I am from supermarket.',
  dragon: 'Hi, I am DragonChen from Taiwan.',
  noobtw: 'Yo, It is noob in the building.'
}

function UserProfile() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { name } = useParams();

  return (
    <div>
      <h3>UserName: {name}</h3>
      <h4>Intro: {userDataBase[name] || 'Not Found'}</h4>
    </div>
  );
}
