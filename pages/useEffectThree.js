import Link from "next/link"
import { useState, useEffect } from "react"
import styles from '/styles/UseEffectThree.module.css'
import Header from '@/components/header'
import SpinningEarth from '@/components/spinningEarth'

export default function UseEffectThree() {

    const [number, setNumber] = useState(0);

    const [value, setValue] = useState(-10);

    useEffect(() => {
        setValue( value + 10 )
    }, [number]) //this number makes it so useeffect only runs when number changes. You can put empty [] to just have it run once.

    return(
        <>
            <main className={styles.main}>
                <Header />
                <div className={styles.bodyContainer}>
                    <div className={styles.leftCol}>
                        <SpinningEarth />
                    </div>
                    <div className={styles.rightCol}>
                            <div className={styles.bodycopy}>
                                <h1>useEffect Example 3</h1>
                                <p>
                                    Here we have our third useState and useEffect example given to you, once again, <b>IN SPACE</b>.<br /><br />
                                    By utizliing useEffect, we can set a variable to useState and have useEffect increment on a number once the value of number changes.<br /><br />
                                    Once the button is clicked it calls a function called setNumber that increases the number by one. The value is increased by 10 each time number is incremented and the useEffect is called.<br /><br />
                                    You can try this example by clicking the <b>SPACE BUTTON</b> below. It's really fun, I promise. Please just try it out. You won't be disappointed.
                                </p>
                            </div>
                            <div className={styles.numberContainer}>
                                {value}
                            </div>
                            <div className={styles.buttonContainer}>
                                <button className={styles.button} onClick={() => setNumber(number + 1)}>Click Me</button>
                            </div>
                    </div>
                </div>

            </main>
        </>
    )
}