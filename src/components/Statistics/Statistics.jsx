import s from "./Statistics.module.css"

const Statistics = ({ title, stats }) => {
    return (
            <section className={s.statistics}>
                {title ? <h2 className={s.title}>{title}</h2> : <></>}
                
                <ul className={s.statList}>
                    {stats.map(item => {
                        return (<li className={s.item} key={item.id}>
                            <span className={s.label}>{item.label}</span>
                            <span className={s.percentage}>{item.percentage}</span>
                        </li>);
                    })}
                    
  </ul>
</section>
)}

export default Statistics;