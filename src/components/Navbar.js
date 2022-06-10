import { useState } from "react";
import { Link, useNavigate, useLocation, NavLink } from "react-router-dom";
import { useAuth, useQuiz } from "../context";
import { logout, NAV_ACTIVE_BACKGROUND, NAV_ACTIVE_COLOR } from "../utils";
export const Navbar = ({ displaySearch = false }) => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { quizDispatch } = useQuiz();

  const [searchValue, setSearchValue] = useState("");
  const {
    auth: { isAuth },
    setAuth,
  } = useAuth();

  const getStyles = ({ isActive }) => {
    if (isActive) {
      return {
        backgroundColor: NAV_ACTIVE_BACKGROUND,
        color: NAV_ACTIVE_COLOR,
      };
    }
  };

  return (
    <>
      <nav className="navbar bg-white border-light-grey flex-between no-wrap pd-xsm">
        <Link to="/" className="nav-left">
          <h3
            className={`pd-sm nav-logo ${
              pathname === "/" ? "primary-color" : "secondary-color"
            }`}
          >
            Zingy Quiz
          </h3>
        </Link>
        {displaySearch && (
          <div>
            <input
              className="input input-secondary search"
              type="search"
              placeholder="search by product name"
              value={searchValue}
              name="search"
              id="Search"
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button className="btn btn-secondary outline-none search-btn">
              Search
            </button>
          </div>
        )}
        <div className="flex-evenly pd-sm col-gap-2 nav-right">
          <button
            onClick={() => {
              if (isAuth) {
                logout(setAuth, quizDispatch);
              }
              navigate("/login");
            }}
            className="btn btn-action"
          >
            {isAuth ? "Logout" : "Login"}
          </button>

          <Link to="/profile">
            <button>
              <i
                className={`fa fa-user fa-2x nav-icon ${
                  pathname === "/profile" ? "primary-color" : "secondary-color"
                } `}
              ></i>
            </button>
          </Link>
        </div>
        <div className="mobile-menu flex-evenly align-center">
          <button
            onClick={() => setIsMobileMenuVisible(!isMobileMenuVisible)}
            className="btn hamburger mobile-item secondary-color"
          >
            {isMobileMenuVisible ? (
              <i className="fa fa-close fa-2x h-100"></i>
            ) : (
              <i className="fa fa-bars fa-2x h-100"></i>
            )}
          </button>
        </div>
      </nav>
      {isMobileMenuVisible && (
        <div className="sidebar sidebar-mobile pd-md">
          <ul className="sidebar-items flex-vertical align-center">
            <NavLink style={getStyles} to="/login">
              <li>Login</li>
            </NavLink>
            <NavLink style={getStyles} to="/profile">
              <li>Profile</li>
            </NavLink>
          </ul>
        </div>
      )}
    </>
  );
};
