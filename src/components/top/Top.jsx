import "./style.scss";

export default function Top() {
  return (
    <div className="top">
      <div className="container">
        <div className="top__inner">
          <h1 className="top__title">
            Hy, my name is <span>Michael</span> a web-developer
          </h1>
          <p className="top__text">
            Bussiness card for{" "}
            <a href="web-command.ru" className="top__link">
              web-command.ru
            </a>
          </p>
          <div className="top__buttons">
            <a href="https://t.me/withxutdrexm">
              <button className="top__btn">Chat in Telegram</button>
            </a>
            <a href="https://t.me/withxutdrexm">
              <button className="top__btn">This project on GitHub</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
