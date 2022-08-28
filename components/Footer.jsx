import {UilFacebook, UilGithub, UilInstagram} from '@iconscout/react-unicons'
import Image from 'next/image'
import Logo from '../assets/Logo.png'
import css from '../styles/Footer.module.css'
export default function Footer(){
    return(
        <div className={css.container}>
            <span>ALL RIGHTS RESERVED</span>
            <div className={css.social}>
                <UilFacebook size={45}/>
                <UilGithub size={45}/>
                <UilInstagram size={45}/>
            </div>

            <div className={css.logo}>
           <Image src ={Logo} alt = "" width={100} height={100}/> 
           <span>FoodDelivery</span>
         </div>
        </div>
    )

};