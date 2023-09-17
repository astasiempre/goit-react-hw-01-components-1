

import css from './FriendlistItem.module.css'

export default function FriendListItem({ avatar, name, isOnline, id }) {
  const statusClassName = isOnline ? css.online : css.offline;
  return (
      <li key={id} className={css.item}>
      <span className={`${css.status} ${statusClassName}`}></span>
          <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
          <p className={css.name}>{name}</p>
    </li>
  );
}




