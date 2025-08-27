import "./style.scss";

import telegram from "../../assets/images/icons/telegram.png";
import github from "../../assets/images/icons/github.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__inner">
          <ul className="footer__links">
            <li className="footer__item">
              <a className="footer__link" href="https://t.me/withxutdrexm">
                <img src={telegram} alt="" />
              </a>
            </li>
            <li className="footer__item">
              <a  className="footer__link" href="https://github.com/curstfear">
                <img src={github} alt="" />
              </a>
            </li>
          </ul>
          <p className="footer__cop">© 2025 All rights reserved.</p>
          <a href="tel:+79497236916" className="footer__tel">
            +7 (949) 723-69-16
          </a>
        </div>
      </div>
    </div>
  );
}
