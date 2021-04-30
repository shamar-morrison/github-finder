const RepoItem = ({ repo }) => {
  return (
    <a href={repo.html_url}>
      <div className="card hover">
        <h3 style={{ textAlign: 'center' }}>{repo.name}</h3>
      </div>
    </a>
  );
};

export default RepoItem;
