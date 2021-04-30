const Header = ({ title }) => {
  return (
    <header className="grid" onClick={() => window.location.reload()}>
      <h1 className="title">{title}</h1>
    </header>
  );
};

export default Header;
