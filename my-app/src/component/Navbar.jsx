/* eslint-disable react/prop-types */
// import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import Textforms from './Textforms';

export default function Navbar(props) {
  return (
    <>
      {/* we can add warnning success danger etc */}

      <nav className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`}>

        <div className="container-fluid">
          {/* we can use Link and  to  instead of <a href=""></a> */}
          <Link className="navbar-brand" to="/">
            {/* {props.text} */} Home Page
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">ok</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/about">
                  {/* {props.abouttext} */}about
                </Link>
                {/* <a className="nav-link active" aria-current="page" href="#"> */}
                {/* {props.abouttext} */}
                {/* </a> */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/textforms">
                  Textforms
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" aria-disabled="true">
                  Disabled
                </Link>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>

        {/* toggel mode  */}
        <div className="d-flex">
          <div className="bg-primary round mx-2" onClick={() => (props.togglemode("primary"))}  style={{ height: "20px", width: "20px", cursor: 'pointer' }} ></div>
          <div className="bg-success round mx-2" onClick={() => (props.togglemode("success"))} style={{ height: "20px", width: "20px", cursor: 'pointer' }} ></div>
          <div className="bg-danger round mx-2" onClick={() => (props.togglemode("danger"))} style={{ height: "20px", width: "20px", cursor: 'pointer' }} ></div>
          <div className="bg-warning round mx-2" onClick={() => (props.togglemode("warning"))} style={{ height: "20px", width: "20px", cursor: 'pointer' }} ></div>
          <div className="bg-light round mx-2" onClick={() => (props.togglemode("light"))} style={{ height: "20px", width: "20px", cursor: 'pointer' }} ></div>
          <div className="bg-dark round mx-2" onClick={() => (props.togglemode("dark"))} style={{ height: "20px", width: "20px", cursor: 'pointer' }} ></div>
        </div>


        {/* <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={() => (props.togglemode(null))} />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> 
            {props.mode==="light"?"lightmode":"darkmode"}toggelmode </label>
        </div>*/}
      </nav>

      <div className="container">
        <h2>hello this is navbar</h2>
      </div>
    </>
  );
}
// Navbar.prototype = {
//     title: PropTypes.string,
//      abouttext: PropTypes.string };
// Navbar.defaultProps = {
//     text: "first home",
//      abouttext: "about" };