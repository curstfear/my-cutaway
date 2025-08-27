import "./style.scss";
import SkillCard from "../../features/skillCard/FlipCard"

export default function Hardskills() {
  return (
    <section className="hardskills">
      <div className="container">
        <h2 className="hardskills__title">Hard Skills</h2>
        <div className="hardskills__items">
          <SkillCard front="HTML" back="Язык гипертекстовой разметки" />
          <SkillCard front="CSS" back="Каскадные таблицы стилей" />
          <SkillCard front="JS" back="Язык программирования JavaScript" />
          <SkillCard
            front="React"
            back="JavaScript-библиотека для разработки UI"
          />
          <SkillCard
            front="NodeJS"
            back="Платформа на JavaScript для написания backend и прочего"
          />
          <SkillCard front="Vite" back="Инструмент сборки фронтенда" />
          <SkillCard
            front="Gulp"
            back="Менеджер для автоматического выполнения часто используемых задач"
          />
          <SkillCard
            front="GitHub"
            back="Хостинг для управления удаленными репозиториями с помощью Git"
          />
        </div>
      </div>
    </section>
  );
}
