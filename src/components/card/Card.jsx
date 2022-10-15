import styles from './Card.module.scss'
import Clock from '../../assets/svg/Clock.svg'
import List from '../listItem/List'

const Card = ({ data }) => {
    const { name, duration, timing, price, pierPrice, additional, img } = data

    return (
        <div className={styles.card}>
            <img src={img.small} alt='img' className={styles.img} />
            <section className={styles.main}>
                <div className={styles.time}>
                    <img src={Clock} alt='clock' />
                    {duration}
                </div>
                <div className={styles.title}>{name}</div>
                <List timing={timing}></List>
            </section>
            <section className={styles.footer}>
                <div className={styles.price}>
                    {price}
                    {pierPrice && <div>{`${pierPrice} р на причале`}</div>}
                </div>
                <button className={styles.button}>Подробнее</button>
            </section>
        </div>
    )
}

export default Card
