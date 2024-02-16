import s from "./Transaction.module.css"

const Transaction = ({ items }) => {
    return (
        <table className={s.transactionHistory}>
  <thead>
    <tr className={s.tabTitle}>
      <th className={s.titleItem}>Type</th>
      <th className={s.titleItem}>Amount</th>
      <th className={s.titleItem}>Currency</th>
    </tr>
  </thead>

            <tbody>
                {items.map(item => {
                    return (
                        <tr key={item.id} className={s.list}>
                            <td className={s.item}>{item.type}</td>
                            <td className={s.item}>{item.amount}</td>
                            <td className={s.item}>{item.currency}</td>
                        </tr>
                    )
                })}    
  </tbody>
</table>
    )}

export default Transaction;