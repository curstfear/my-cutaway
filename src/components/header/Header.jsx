import "./style.scss";
import logo from "../../assets/images/logo-icon.svg";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <a className="logo" href="#">
            <img src={logo} alt="" className="logo__img" />
          </a>
          <nav className="contacts">
            <ul className="contacts__list">
              <li className="contacts__list-item">
                <a href="" className="contacts__list-link contacts__list-link--active">
                  Home
                </a>
              </li>
              <li className="contacts__list-item">
                <a href="" className="contacts__list-link">
                  Contacts
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
