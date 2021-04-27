import { useState } from 'react';

/** User Card  */
const UserItem = ({ user: { avatar_url, login, repos_url } }) => {
  return (
    <a href={repos_url} target="_blank">
      <div className="card text-center">
        <img className="round-img" src={avatar_url} alt="avatar image" srcSet={avatar_url} />
        <h3>{login}</h3>
      </div>
    </a>
  );
};

export default UserItem;
