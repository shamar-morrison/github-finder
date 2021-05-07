import UserCard from './UserCard';
import Spinner from '../layout/Spinner';

const Users = ({ users, loading, noUsers }) => {
  if (loading) {
    return <Spinner />;
  }
  if (noUsers) {
    console.debug('noUsers', noUsers);
    return <h2 className="error">No Users found. Please try again.</h2>;
  } else {
    return (
      <div className="users-grid">
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

export default Users;
