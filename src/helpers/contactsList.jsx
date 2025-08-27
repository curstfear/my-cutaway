import telegram from "../assets/images/icons/telegram.png";
import github from "../assets/images/icons/github.png";
import email from "../assets/images/icons/email.png";

export const contacts = [
  {
    front: "Telegram",
    back: (
      <a
        href="https://t.me/withxutdrexm"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={telegram} alt="Telegram" className="contact__img" />
      </a>
    ),
  },
  {
    front: "GitHub",
    back: (
      <a
        href="https://github.com/curstfear"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={github} alt="GitHub" className="contact__img" />
      </a>
    ),
  },
  {
    front: "Gmail",
    back: (
      <a
        href="mailto:kateshii16@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={email} alt="Gmail" className="contact__img" />
      </a>
    ),
  },
  {
    front: "Phone",
    back: (
      <a
        href="tel:+79497236916"
      >
        +7 (949) 723-69-16
      </a>
    ),
  }
];
