import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

// CSS styling
const userStyling = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
  marginTop: '40px',
};

const Users = ({ users, loading, noUsers }) => {
  if (loading) {
    return <Spinner />;
  } else if (noUsers) {
    return <h2 className="error">No Users found. Please try again.</h2>;
  } else {
    return (
      <div style={userStyling}>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

export default Users;
