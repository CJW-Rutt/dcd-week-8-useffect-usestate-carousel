import Link from 'next/link'
import { useState, useEffect } from "react"
import Image from 'next/image'
import styles from './Carousel.module.css'

export default function Carousel() {

    const [img, setImg] = useState(0);

    const changeImage = (change) => {
        if(change == "backward") {
            setImg(img - 1);
            if (img == 0) {
                setImg(5);
            }
            console.log(img);
        } else if(change == "forward") {
            setImg(img + 1);
            if (img == 5) {
                setImg(0);
            }
        }
    }

    return (
        <>
            <div className={styles.carousel} style={{
                backgroundImage:"url(/carousel-images/" + img + ".jpg)",
                backgroundSize:"cover",
                backgroundRepeat: "no-repeat",
                width: 500,
                height: 300
            }}>
                <div className={styles.leftArrowContainer}>
                    <Image 
                        src={"/icons/leftArrow.png"}
                        alt={"/icons/leftArrow.png"}
                        width={45}
                        height={50}
                        onClick={() => changeImage("backward")}
                    />
                </div>
                <div className={styles.rightArrowContainer}>
                    <Image 
                        src={"/icons/rightArrow.png"} 
                        alt={"/icons/rightArrow.png"}
                        width={45}
                        height={50}
                        onClick={() => changeImage("forward")}
                    />
                </div>
            </div>
        </>
    )
}