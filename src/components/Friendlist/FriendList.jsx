// export default function FriendList({friends}) {
//     return ( 
//         <ul className="friend-list">
//             {friends.map((friend) => (
//                 <li key={friend.id}>{friend.name}</li>
//     ))}
//     </ul>
//     );
// };

import FriendListItem from "../FriendListItem/FriendListItem";
import css from './Friendlist.module.css'

export default function FriendList({ friends }) {
  return (
      <ul className={css.friendList}>
          {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
}


