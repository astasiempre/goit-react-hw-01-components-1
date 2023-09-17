// export default function FriendList({ friends }) {
//   return (
//     <ul className="friend-list">
//       {friends.map(({ avatar, name, isOnline, id }) => (
//         <li key={id} className="item">
//           <span className="status"></span>
//           <img className="avatar" src={avatar} alt="User avatar" width="48" />
//           <p className="name">{name}</p>
//         </li>
//       ))}
//     </ul>
//   );
// }

import css from './FriendlistItem.module.css'

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
      <li className={css.item}>
      <span className={`${css.status} ${isOnline ? 'online' : 'offline'}`}></span>
          <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
          <p className={css.name}>{name}</p>
    </li>
  );
}




