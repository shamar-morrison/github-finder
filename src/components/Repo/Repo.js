import RepoItem from './RepoItem';

const Repo = ({ repos }) => {
  return (
    <>
      <h2 className="text-center repo-title"> most recent repos</h2>
      <div className="grid-3">
        {repos.map(repo => (
          <RepoItem repo={repo} key={repo.id} />
        ))}
      </div>
    </>
  );
};

export default Repo;
