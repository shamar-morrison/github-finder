import Nav from './components/layout/Nav';
import Header from './components/layout/Header';
import UserItem from './components/users/UserItem';
import SearchBar from './components/layout/SearchBar';
import Users from './components/users/Users';
import { useState, useEffect, Component } from 'react';
import Spinner from './components/layout/Spinner';

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  noUsers = false;

  async componentDidMount() {
    try {
      this.setState({ loading: true });

      // fetch github users
      const res = await fetch(
        `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      const data = await res.json();
      // throw error if data could not be fetched
      if (!data) throw new Error('Error fetching data');
      // update state with user data
      this.setState({ loading: false, users: data });
    } catch (err) {
      console.error(err.message);
    }
  }

  // Search for Github users
  handleSearch = async searchQuery => {
    if (!searchQuery) return;
    try {
      this.setState({ loading: true });

      // fetch github users
      const res = await fetch(
        `https://api.github.com/search/users?q=${searchQuery}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      const data = await res.json();
      console.log('data', data);
      // throw error if data could not be fetched
      if (!data) throw new Error('Error fetching data');
      // if no users found
      if (!data.items.length) this.noUsers = true;
      // update state with user data
      this.setState({ loading: false, users: data.items });
    } catch (err) {
      console.error(err.message);
    }
  };

  render() {
    return (
      <div className="App">
        {/* <Nav /> */}
        <div className="container">
          <Header title={'Search Github'} />
          <SearchBar onSearch={this.handleSearch} />
          <Users loading={this.state.loading} users={this.state.users} noUsers={this.noUsers} />
        </div>
      </div>
    );
  }
}

export default App;
