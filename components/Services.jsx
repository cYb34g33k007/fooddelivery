import css from '../styles/Services.module.css'
import s1 from '../assets/s1.png'
import s2 from '../assets/s2.png'
import s3 from '../assets/s3.png'
import Image from 'next/image'

export default function Services(){
    return(
        <>
        <div className={css.heading}>
            <span>WHAT WE SERVE</span>
            <span>Your Favourite Food</span>
            <span>Delivery Partner</span>



        </div>
        
        {/* Features */}

        <div className={css.services}>

            <div className={css.feature}>

                <div className={css.ImageWrapper}>
                    <Image src={s1} alt="" objectFit='cover' layout='intrinsic' />

                </div>


                <span>Easy To Order</span>
                <span>You Only Need Few Steps in Ordering Food</span>
            </div>





            <div className={css.feature}>

            <div className={css.ImageWrapper}>
                    <Image src={s2} alt="" objectFit='cover' layout='intrinsic' />

                </div>


                <span>Easy To Order</span>
                <span>Delivery That is Faster Than Ever</span>
            </div>
            <div className={css.feature}>

            <div className={css.ImageWrapper}>
                    <Image src={s3} alt="" objectFit='cover' layout='intrinsic' />

                </div>


                <span>Easy To Order</span>
                <span>Not Only Faster, We Also Provide Best Of Quality Food</span>
            </div>
        </div>
        
        </>

    )
};