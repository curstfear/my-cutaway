import "./style.scss";
import FlipCard from "../../features/flipCard/FlipCard"
import {skills} from '../../helpers/skillsList'


export default function Hardskills() {
  return (
    <section className="hardskills" id="hardskills">
      <div className="container">
        <h2 className="hardskills__title">Hard Skills</h2>
        <div className="hardskills__items">
          {skills.map((skill, index) => (
            <FlipCard key={index} front={skill.front} back={skill.back} />
          ))}
        </div>
      </div>
    </section>
  );
}
