import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg w-100 px-4"
        style={{ backgroundColor: "#F1E2DA" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{color:"#C76B81"}}>
            Bakery's Name
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav" style={{color:"#C76B81"}}>
              <li className="nav-item">
                <Link to={"/"} className="nav-link active" style={{color:"#C76B81"}}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/customers"} className="nav-link active" style={{color:"#C76B81"}}>
                  Customers
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/products"} className="nav-link active" style={{color:"#C76B81"}}>
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/sales"} className="nav-link active" style={{color:"#C76B81"}}>
                  Sales
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
