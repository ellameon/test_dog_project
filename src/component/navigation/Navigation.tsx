import {observer} from "mobx-react";
import {NavLink} from "react-router-dom";
import {userStore} from "../../store/UserStore";
import {useCallback} from "react";
import {DogController} from "../../controller/DogController";
import {useIsLogged} from "../../hook/useIsLogged";
import {Navigate} from "react-router";


export const Navigation = observer(function Navigation() {

  const userName = userStore.login
  const onLogOut = useCallback(() => {
    DogController.logOut()
  }, [])

  const isUserLogged = useIsLogged()
  if (!isUserLogged) {
    return <Navigate to='/AuthScreen'/>
  }

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
                  id="offcanvasNavbarLabel">{userName}</h5>
              <button type="button"
                      className="btn "
                      data-bs-dismiss="offcanvas"
                      onClick={onLogOut}
                      aria-label="Close">
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-door-open" fill="currentColor"
                     xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd"
                        d="M1 15.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM11.5 2H11V1h.5A1.5 1.5 0 0 1 13 2.5V15h-1V2.5a.5.5 0 0 0-.5-.5z"/>
                  <path fillRule="evenodd"
                        d="M10.828.122A.5.5 0 0 1 11 .5V15h-1V1.077l-6 .857V15H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117z"/>
                  <path d="M8 9c0 .552.224 1 .5 1s.5-.448.5-1-.224-1-.5-1-.5.448-.5 1z"/>
                </svg>

              </button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <NavLink className="nav-link"
                           aria-current="page"
                           to="/MainScreen">Main Screen</NavLink>
                </li>
                {userName !== 'operator' &&
                  (<li className="nav-item">
                  <NavLink className="nav-link"
                           to="/SecondScreen">Second Page</NavLink>
                </li>)}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </>
})