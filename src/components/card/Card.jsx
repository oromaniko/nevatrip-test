import styles from './Card.module.scss'
import Clock from '../../assets/svg/Clock.svg'
import List from '../listItem/List'
import { useEffect, useState } from 'react'
import { color } from '../../utils'

const Card = ({ data }) => {
    const [isMobile, setIsMobile] = useState(false)
    const { name, duration, timing, price, pierPrice, additional, img } = data

    useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth < 576)
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [window.innerWidth])

    return (
        <div className={styles.card}>
            <section className={styles.img}>
                <img src={isMobile ? img.small : img.large} alt='img' />
                {additional && (
                    <div
                        className={styles.additional}
                        style={
                            color[isMobile ? 'mobile' : 'desktop'][additional]
                        }
                    >
                        {additional}
                    </div>
                )}
            </section>
            <section className={styles.content}>
                <siv className={styles.head}>
                    <div className={styles.time}>
                        <img src={Clock} alt='clock' />
                        {duration}
                    </div>
                    <div className={styles.title}>{name}</div>
                </siv>
                <List timing={timing}></List>
                <div className={styles.footer}>
                    <div className={styles.priceContainer}>
                        <div className={styles.price}>{price}</div>
                        {pierPrice && (
                            <div
                                className={styles.pierPrice}
                            >{`${pierPrice} р на причале`}</div>
                        )}
                    </div>
                    <button className={styles.button}>Подробнее</button>
                </div>
            </section>
        </div>
    )
}

export default Card
