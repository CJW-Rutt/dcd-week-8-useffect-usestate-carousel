import Link from 'next/link'
import { useState, useEffect } from "react"
import styles from '/styles/UseEffectOne.module.css'
import Header from '@/components/header'

export default function UseEffectOne() {

    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 1);
    })

    return (
        <>
        <main className={styles.main}>
            <Header />
            <div className={styles.copyContainer}>
                <h1>WARNING!</h1>
                <p className={styles.subHead}>Infinite Loop Detected.</p>
                <p className={styles.bodyCopy}>Please refresh the page by clicking refresh.<br /><br /> If that won't work please try removing /useEffectOne from the URL and press enter.</p>
            </div>
            <div className={styles.counterContainer}>
                {number}
            </div>
        </main>
        </>
    )
}