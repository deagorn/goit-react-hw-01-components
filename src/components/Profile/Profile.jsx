import s from "./Profile.module.css"

const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <>
        <div className={s.profile}>
        <div className={s.description}>
            <img
                        src={avatar}
                        alt="User avatar"
                        className={s.avatar}
            />
                    <p className={s.name}>{username}</p>
                    <p className={s.tag}>@{tag}</p>
                    <p className={s.location}>{location}</p>
        </div>

                <ul className={s.stats}>
                {Object.entries(stats).map(([key, value]) => {
                    return ( <li className={s.list} key={key}>
                        <span className={s.label}>{key}</span>
                        <span className={s.quantity}>{value}</span>
            </li>)
                })}
           
        </ul>
    </div>
</>)}

export default Profile;