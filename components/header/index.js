import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.css'

export default function Header() {


    return (
        <>
            <div className={styles.headerContainer}>
                <div className={styles.headerInnerContainer}>
                    <div className={styles.logoContainer}>
                        <Link href={"/"}>
                            <Image
                                src={"/logo.png"}
                                alt={"/logo.png"}
                                width={60}
                                height={60}
                            />
                        </Link>
                    </div>
                    <div className={styles.navigationContainer}>
                        <Link href="/useEffectOne">useEffectOne</Link>
                        <Link href="/useEffectTwo">useEffectTwo</Link>
                        <Link href="/useEffectThree">useEffectThree</Link>
                        <Link href="/carouselPage">Carousel</Link>
                    </div>
                </div>
            </div>
        </>
    )
}