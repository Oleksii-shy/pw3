import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import './App.css';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

function App() {
  return (
      <Router>
        <div>
          <div><Link to={'/'}>Home</Link></div>
          <div><Link to={'/users'}>Users</Link></div>
          <div><Link to={'/posts'}>Posts</Link></div>
          <div><Link to={'/comments'}>Comments</Link></div>
          <hr/>
          <Switch>
            <Route path={'/users'} render={() => <Users/>}/>
            <Route path={'/posts'} render={() => <Posts/>}/>
            <Route path={'/comments'} render={() => <Comments/>}/>
          </Switch>
          <hr/>
        </div>
      </Router>
  );
}

export default App;
