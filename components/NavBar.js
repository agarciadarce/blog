import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link href="/">
        <a className="navbar-brand">
          XD
        </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link href="/">
                <a className="nav-link">
                  Home <span className="sr-only">(current)</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
            <Link href="/users">
              <a className="nav-link">
                Users
              </a>
            </Link>
            </li>
            <li className="nav-item">
                <Link href="/posts">
              <a className="nav-link" >
                Posts
              </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
