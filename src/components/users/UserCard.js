import { Link } from 'react-router-dom';

/** User Card  */
const UserCard = ({ user: { avatar_url, login } }) => {
  return (
    <Link to={`/user/${login}`} target="_blank">
      <div className="card text-center hover">
        <img className="round-img" src={avatar_url} alt="avatar image" srcSet={avatar_url} />
        <h3>{login}</h3>
      </div>
    </Link>
  );
};

export default UserCard;
