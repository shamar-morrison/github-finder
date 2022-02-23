const RepoItem = ({ repo }) => {
  console.log('repo', repo);
  return (
    <a href={repo.html_url} target="_blank">
      <div className="card hover">
        <h3 style={{ textAlign: 'center' }}>{repo.name}</h3>
      </div>
    </a>
  );
};

export default RepoItem;
