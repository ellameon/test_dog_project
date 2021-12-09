import {observer} from "mobx-react";
import {NavLink} from "react-router-dom";


export const Navigation = observer(function Navigation() {
  return <>
    <div className='nav-screen'>
      <nav className="navbar navbar-light  fixed-top">
        <div className="container-fluid">
          <button className="navbar-toggler"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasNavbar"
                  aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"/>
          </button>
          <div className="offcanvas offcanvas-start"
               tabIndex={-1}
               id="offcanvasNavbar"
               aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title"
                  id="offcanvasNavbarLabel">Страницы</h5>
              <button type="button"
                      className="btn "
                      data-bs-dismiss="offcanvas"
                      aria-label="Close">
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="32" height="32"
                     fill="currentColor"
                     className="bi bi-caret-left"
                     viewBox="0 0 16 16">
                  <path
                    d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
                </svg>
              </button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <NavLink className="nav-link"
                     to="/AuthScreen">Auth Screen</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link"
                     aria-current="page"
                     to="/MainScreen">Main Screen</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link"
                     to="/SecondPage">Second Page</NavLink>
                </li>
              </ul>
              </div>
            </div>
        </div>
      </nav>
    </div>
  </>
})