import s from "./FriendList.module.css"

const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <li className={s.item} key={name}>
            {isOnline ? <span className={s.statusOn}></span> : <span className={s.statusOff}></span>}
            <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={s.name}>{name}</p>
</li>
    )}

export default FriendListItem;