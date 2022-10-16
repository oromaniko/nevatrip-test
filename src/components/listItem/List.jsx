import styles from './List.module.scss'
import Check from '../../assets/svg/check-mark.svg'
import { useState } from 'react'

const List = ({ timing }) => {
    const [showMore, setShowMore] = useState(timing.length > 4)
    return (
        <ul>
            <li>
                <img src={Check} alt='check' />
                <div>Билет на целый день</div>
            </li>
            <li>
                <img src={Check} alt='check' />
                <div>Неограниченное число катаний</div>
            </li>
            <li>
                <img src={Check} alt='check' />
                <div>6 остановок у главных достопримечательностей</div>
            </li>
            <li>
                <img src={Check} alt='check' />
                <div>
                    <span>Ближайший рейс сегодня</span>
                    <div className={styles.timeContainer}>
                        {showMore ? (
                            <>
                                {timing.slice(0, 3).map((time) => (
                                    <div className={styles.time}>{time}</div>
                                ))}
                                <button
                                    className={styles.time}
                                    onClick={() => setShowMore(false)}
                                >
                                    ещё...
                                </button>
                            </>
                        ) : (
                            timing.map((time) => (
                                <div className={styles.time}>{time}</div>
                            ))
                        )}
                    </div>
                </div>
            </li>
        </ul>
    )
}

export default List
