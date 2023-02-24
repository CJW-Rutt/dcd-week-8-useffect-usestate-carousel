import Link from 'next/link'
import Image from 'next/image'
import styles from './SpinningEarth.module.css'

export default function SpinningEarth() {


    return (
        <>
            <div className={styles.earthContainer}>
                {/* 
                <div className={styles.earth}>
                </div>*/}
                <div className={styles.container}>
                    <div className={styles.sphere}>
                        <div className={styles.layer}>
                            <div className={styles.ambience}>
                            </div>
                        </div>
                        <div className={styles.layer}>
                        </div>
                        <div className={`${styles.layer} ${styles.land}`}>
                        </div>
                        <div className={`${styles.layer} ${styles.clouds}`}>
                        </div>
                        <div className={`${styles.layer} ${styles.darkside}`}>
                        </div>
                        <div className={styles.layer}>
                            <div className={styles.edge}></div>
                        </div>
                        <div className={styles.layer}>
                            <div className={styles.glare}></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}