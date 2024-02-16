import Profile from "./Profile/Profile"
import Statistics from "./Statistics/Statistics"
import FriendList from "./FriendList/FriendList"


import userData from "../constants/user.json"
import dataStatistics from "../constants/data.json"
import friends from "../constants/friends.json"


export const App = () => {
  return (
    <div>
      <Profile username={userData.username} tag={userData.tag} location={userData.location} avatar={userData.avatar} stats={userData.stats} />
      <Statistics title="Upload stats" stats={dataStatistics} />
      <FriendList friends={friends}/>
    </div>
  );
};
