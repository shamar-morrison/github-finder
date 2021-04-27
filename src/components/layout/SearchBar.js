import { useState } from 'react';

const SearchBar = props => {
  const [state, setState] = useState('');

  // onChange handler
  const handleChange = event => {
    const { value } = event.target;
    setState(value);
  };

  // onSubmit handler
  const handleSubmit = event => {
    event.preventDefault();
    props.onSearch(state);
    // reset state
    setState('');
  };

  return (
    <div className="grid">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          className="search-bar"
          placeholder="Enter username..."
          onChange={handleChange}
          value={state}
        />
        {/* Search btn */}
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};

export default SearchBar;
