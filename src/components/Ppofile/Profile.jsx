import css from './Profile.module.css'


export default function Profile(props) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src={props.avatar}
          alt={props.username}
          className={css.avatar}
        />
        <p className={css.name}>{props.username}</p>
        <p className={css.tag}>{props.tag}</p>
        <p className={css.location}>{props.location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.stats.li}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{props.stats.followers}</span>
        </li>
        <li className={css.stats.li}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{props.stats.views}</span>
        </li>
        <li className={css.stats.li}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}