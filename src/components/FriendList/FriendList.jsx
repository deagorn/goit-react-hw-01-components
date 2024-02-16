import s from "./FriendList.module.css"
import FriendListItem from "./FriendListItem"

const FriendList = ({friends}) => {
    return (
        <ul className={s.friendList}>
            {friends.map(item => {
               return <FriendListItem  key={item.id} avatar={item.avatar} name={item.name} isOnline={item.isOnline} />
            })}
 
</ul>)}

export default FriendList;