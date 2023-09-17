
import css from './Statistics.module.css'

export default function Statistics({ title, stats }) {
  const colors = ['cadetblue', 'lightcoral', 'lightseagreen', 'lightsteelblue', 'lightpink'];
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }, index) => (
          <li key={id} className={css.item}
          style={{ backgroundColor: colors[index % colors.length] }}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};