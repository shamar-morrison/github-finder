import { useEffect } from 'react';
import Spinner from '../layout/Spinner';
import Repo from '../Repo/Repo';

const User = ({ currentUser, loading, repos, match, getUser, getUserRepos }) => {
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    company,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = currentUser;

  if (loading) return <Spinner />;

  return (
    <>
      <div style={{ marginTop: '25px' }}></div>
      {/* GRID */}
      <div className="card grid-2">
        {/* GRID 1 */}
        <div className="all-center">
          <img src={avatar_url} className="round-img" style={{ width: '150px' }} />
          <h1>{name}</h1>
          <p>Location: {location ? location : `Private/not set`}</p>
          <span className="hireable">
            Hireable:{' '}
            {hireable ? (
              <i className="fas fa-check-circle text-success" />
            ) : (
              <i className="fas fa-times-circle text-danger" />
            )}
          </span>
        </div>
        {/* GRID 2 */}
        <div>
          <h3>Bio</h3>
          {bio ? (
            <>
              <p className="bio">{bio}</p>
            </>
          ) : (
            `User doesn't have a bio.`
          )}
          <div>
            <a href={html_url} className="btn btn-dark my-1">
              <i class="fab fa-github"></i> Github
            </a>
            <ul className="user-info">
              <li>
                {login && (
                  <>
                    {' '}
                    <strong>Username:</strong> {login}
                  </>
                )}
              </li>
              <li>
                {blog && (
                  <>
                    {' '}
                    <strong>Website:</strong> {blog}
                  </>
                )}
              </li>
              <li>
                {company && (
                  <>
                    {' '}
                    <strong>Company:</strong> {company}
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Public Repos: {public_repos}</div>
        <div className="badge badge-dark">Public Gists: {public_gists}</div>
      </div>

      {/* REPOS */}
      <Repo repos={repos} />
    </>
  );
};

export default User;
