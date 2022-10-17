const Header = () => {
  return (
    <header className="display-f justify-space-between px-3 py-1 align-center">
      <h1>Logo</h1>
      <ul className="header__nav display-f align-center list-none">
        <li className="nav-link px-3">
          <a href="" className="text-decoration-none text-black">
            Playground
          </a>
        </li>
        <li className="nav-link px-3">
          <a href="" className="text-decoration-none text-black">
            Docs
          </a>
        </li>
        <li className="nav-link px-3">
          <a href="" className="text-decoration-none text-black">
            Resources
          </a>
        </li>
      </ul>

      <div className="header__action">
        <a href="">Contribute</a>
        <button className="btn mx-1 px-3">Showcase</button>
      </div>
    </header>
  );
};
export default Header;
