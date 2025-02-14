import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'; // Import the CSS file for the Header

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container"> {/* Added container class here */}
          <a className="navbar-brand" href="/">
            <img src="logo-color.png" alt="Logo" className="logo" /> {/* Added logo class here */}
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only"></span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item" style={{ marginRight: '20px' }}>
                {/* <Link className="nav-link" to="/mycart">
                  My Cart
                </Link> */}
              </li>
              <li className="nav-item" style={{ marginLeft: '20px' }}>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item" style={{ marginLeft: '20px' }}>
                <Link className="nav-link" to="/signup">
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        </div> {/* Added container class here */}
      </nav>
    </>
  );
}
