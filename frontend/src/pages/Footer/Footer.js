import React from 'react'
import {FiFacebook, AiOutlineHeart, AiOutlineInstagram, IoLogoYoutube} from 'react-icons/all';
import { Input,Stack } from '@chakra-ui/react'
import './footercss.css'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="footerCmp">
            <footer>
                <div className="footerCategorie">
                    <h1>Categories</h1>
                    <ul>
                        <li><Link to = '/shop/?cg=Pizza'>Pizza</Link></li>
                        <li><Link to = '/shop/?cg=Burger'>Burger</Link></li>
                        <li><Link to = '/shop/?cg=Coffee'>Coffee</Link></li>
                        <li><Link to = '/shop/?cg=Meal'>Meal</Link></li>
                    </ul>
                </div>

                <div className="fooHelp">
                    <h1>Help</h1>
                    <ul>
                        <li>Tracke Order</li>
                        <li>Returns</li>
                        <li>Shipping</li>
                        <li>FAQs</li>
                    </ul>
                </div>

                <div className="footerGetInTouch">
                    <h1>Get in touch</h1>
                    <ul>
                    <p> <span id='hoursOpen'> Hours Open </span> <br />
                            9:00 am to 2:00  pm <br />
                            5:00 pm to 12:00 am 
                        </p>
                        <li className="footerIcons">
                            <FiFacebook size="25" />
                        </li>
                        <li className="footerIcons">  
                            <AiOutlineInstagram size="25" />
                        </li>
                        <li className="footerIcons">
                            <IoLogoYoutube size="25"/>
                        </li>
                    </ul>
                </div>

                <div className="footerNews">
                    
                         
                    {/* <h1></h1>
                    <ul>
                        <li>
                            <ifmare id='iframe' src='https://www.google.com/maps/place/The+Bungalow+Cafe+Adajan/@21.1890008,72.7896418,172m/data=!3m1!1e3!4m6!3m5!1s0x3be04d0d169c784b:0xa2b39cb9caf0dbe2!8m2!3d21.1892301!4d72.7899881!16s%2Fg%2F11s19q_4x8' > </ifmare>

                             <Stack spacing={3}>
                            <Input variant="flushed" placeholder="email@example.com" size="10" width="200px"/>
                            </Stack>
                        </li>
                        <li>
                            <button className="footerBtn">Subscribe</button>
                        </li>
                    </ul> */}
                </div>

                <div className="creditsIcons">
         
                </div>
                
                <div className="paragraphFooter"><p>Copyright ©2021 All rights reserved | This website is made with ♡ </p>

                </div>



            </footer>

        </div>
    )
}

export default Footer;
