import "./style.scss";
import FlipCard from "../../features/flipCard/FlipCard";
import { contacts } from "../../helpers/contactsList";


export default function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <div className="contact__inner">
          <h2 className="contact__title">Contacts</h2>
          <div className="contact__items">

              {contacts.map((contact, index) => (
                <div className="contact__item" key={index}>
                  <FlipCard front={contact.front} back={contact.back} />
                </div>
              ))}

          </div>
        </div>
      </div>
    </section>
  );
}
