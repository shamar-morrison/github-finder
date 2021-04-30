import { useState, useEffect, Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/layout/Nav';
import Header from './components/layout/Header';
import UserCard from './components/users/UserCard';
import SearchBar from './components/layout/SearchBar';
import Users from './components/users/Users';
import User from './components/users/User';
import Spinner from './components/layout/Spinner';

const App = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let noUsers = false;

  useEffect(async () => {
    try {
      setIsLoading(true);

      // fetch github users
      const res = await fetch(
        `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      const data = await res.json();
      // throw error if data could not be fetched
      if (!data) throw new Error('Error fetching data');
      console.debug('data', data);
      // update state with user data
      setIsLoading(false);
      setUsers(data);
    } catch (err) {
      console.error(err.message);
    }
  }, []);

  // Get single github user
  const getUser = async username => {
    if (!username) return;

    try {
      setIsLoading(true);

      // fetch github user
      const res = await fetch(
        `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      const user = await res.json();
      // throw error if user could not be fetched
      if (!user) throw new Error('Error fetching repos');
      // update current user
      setIsLoading(false);
      setCurrentUser(user);
    } catch (err) {
      console.error(err.message);
    }
  };

  // Get user repos
  const getUserRepos = async username => {
    if (!username) return;

    try {
      setIsLoading(true);
      // fetch user repos
      const res = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=6&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      const data = await res.json();
      // throw error if repos could not be fetched
      if (!data) throw new Error('Error fetching user');
      // update repos
      setIsLoading(false);
      setRepos(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  // Search for Github users
  const handleSearch = async searchQuery => {
    if (!searchQuery) return;
    try {
      setIsLoading(true);
      // fetch github users
      const res = await fetch(
        `https://api.github.com/search/users?q=${searchQuery}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      const data = await res.json();
      // throw error if data could not be fetched
      if (!data) throw new Error('Error fetching data');
      // if no users found
      if (!data.items.length) this.noUsers = true;
      // update state with user data
      setIsLoading(false);
      setUsers(data.items);
      noUsers = false;
    } catch (err) {
      console.error(err.message);
    }
  };

  // const { users, loading, currentUser, repos } = this.state;

  return (
    <Router>
      <div className="App">
        <div className="container">
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <>
                  <Header title={'Search Github Repos'} />
                  <SearchBar onSearch={handleSearch} />
                  <Users loading={isLoading} users={users} noUsers={noUsers} />
                </>
              )}
            ></Route>
            {/* <!-- USER ROUTE--> */}
            <Route
              exact
              path="/user/:login"
              render={props => (
                // USER
                <User
                  {...props}
                  getUser={getUser}
                  getUserRepos={getUserRepos}
                  currentUser={currentUser}
                  loading={isLoading}
                  repos={repos}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
