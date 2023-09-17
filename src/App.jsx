import Profile from "./components/Ppofile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/Friendlist/FriendList";
import TransactionHistory from "./components/Transactionhistory/TransactionHistory";
import  FriendListItem  from "./components/FriendListItem/FriendListItem";
import user from "./user.json";
import data from "./data.json";
import friends from "./friends.json";
import transactions from "./transactions.json";
export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <FriendListItem friends={friends} />
    </div>
  );
}
