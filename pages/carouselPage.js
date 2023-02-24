import Carousel from "@/components/carousel"
import styles from '/styles/CarouselPage.module.css'
import Header from '@/components/header'

export default function CarouselPage() {
    return(
        <>
            <main className={styles.main}>
                <Header />
                <div className={styles.bodyContainer}>
                   <h1>Carousel</h1>
                   <Carousel />
                </div> 
            </main>
        </>
    )
}