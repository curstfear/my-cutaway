import "./style.scss";
import logo from "../../assets/images/logo-icon.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
  const activeLink = "nav__list-link nav__list-link--active";
  const normalLink = 'nav__list-link';
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <a className="logo" href="/">
            <img src={logo} alt="" className="logo__img" />
          </a>
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__list-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav__list-item">
                <NavLink
                  to="/contacts"
                  className={({ isActive }) => 
                    isActive ? activeLink : normalLink
                  }
                >
                  Contacts
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
