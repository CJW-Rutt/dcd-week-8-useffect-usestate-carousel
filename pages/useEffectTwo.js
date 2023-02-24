import Link from "next/link"
import { useEffect, useState } from "react"
import styles from '/styles/UseEffectTwo.module.css'
import Header from '@/components/header'
import SpinningEarth from '@/components/spinningEarth'

export default function UseEffectTwo() {

    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number + 50);
    }, [])


    return(
        <>
        <main className={styles.main}>
            <Header />
            <div className={styles.bodyContainer}>
                <div className={styles.leftCol}>
                    <SpinningEarth />
                </div>
                <div className={styles.rightCol}>
                    <h1>useEffect Example Two</h1>
                    <p>
                        The example here uses useEffect to call a function called setNumber that adds +50 to number which is displayed below.<br/><br/>
                        The useEffect is set to run one time once the page loads.<br /><br />
                        useEffect and useState can be used in many ways to great effect. It's very interesting to see them working in action.<br /><br/>
                        And even better to see them working <b>IN SPACE!</b>
                    </p>
                    <div className={styles.numberContainer}>
                        {number}
                    </div>
                </div>

            </div>

        </main>
        </>
    )
}