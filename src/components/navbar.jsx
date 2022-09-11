import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = (props) => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-light _navbar">
      <div className="container-fluid">
        <img
          className="logo"
          src="https://seeklogo.com/images/O/opensea-logo-7DE9D85D62-seeklogo.com.png"
          alt="logo"
        />
        <a className="navbar-brand nav-title" href="#">
          OpenSea
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <form className="d-flex form-control" role="search">
          <div className="serach-icon">
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          </div>
          <input
            className="form-bodrer me-2"
            type="search"
            placeholder="Search itmes, collections, and accounts"
            aria-label="Search"
          />
          {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
        </form>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item _item">
              <a className="nav-link active links" href="#">
                Explore
              </a>
            </li>
            <li className="nav-item _item">
              <a className="nav-link active links" href="#">
                Stats
              </a>
            </li>
            <li className="nav-item _item">
              <a className="nav-link active links" href="#">
                Resources
              </a>
            </li>
            <li className="nav-item _item">
              <a className="nav-link active links" href="#">
                Create
              </a>
            </li>
            <li className="nav-item">
              <FontAwesomeIcon icon={"fa-circle-user"} className="links-icon links" />
              <FontAwesomeIcon icon="fa-solid fa-wallet"  className="links-icon links" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
