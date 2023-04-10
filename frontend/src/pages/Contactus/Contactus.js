import React, { useState } from 'react'
import { Image } from "@chakra-ui/react"
import { Helmet } from 'react-helmet';

import cover from './cover.jpg'
import { Input,InputGroup, InputLeftElement, Textarea,Button  } from "@chakra-ui/react"
import {BsEnvelope, GiPositionMarker, HiOutlinePhone} from 'react-icons/all'
import './contactuscss.css';

const Contactus = () => {
    const [email, setemail] = useState('')
    const [body, setbody] = useState('')

    const handlesubmit = () =>{
        window.open(`mailto:abdessamadbouthjoul@gmail.com?subject=Sample&body=${body}`)
    }
    return (

        <div className="contactUs">
            <Helmet>
                <title>Contact</title>
            </Helmet>
        <div className="headerContact">
            <Image className="imageContact" src=' https://images.unsplash.com/photo-1665856522772-7fd5c960b389?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHJlc3RvcmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' alt="contactImage" objectFit="cover"/>
            {/* <Image className="imageContact" src='https://images.unsplash.com/photo-1674499978132-373a23ac17b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHJlc3RvcmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' alt="contactImage" objectFit="cover"/> */}
            {/* <Image className="imageContact" id='contactImg' src='https://images.unsplash.com/photo-1600353565724-30b80701a3aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdG9yYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' alt="contactImage" objectFit="cover" backgroundColor="rgba(0,0,0,0.6)"/> */}
            {/* <Image className="imageContact" src='https://i.imgur.com/7rwaigw.jpg' alt="contactImage" objectFit="cover"/> */}
            <div className="text">
                <h2>Contact</h2>  
            </div>
              
        </div>

        <div className="card-contact">
            <div className="sendMsg">
                <h4>Send Us A Message</h4>
                    <div className="inputContact">
                        <InputGroup width="450px" >
                            <InputLeftElement       pointerEvents="none"  children={<BsEnvelope className = 'envolope' color="gray.300" />}/>
                            <Input value = {email} onChange = {e=> setemail(e.target.value)} type="text" placeholder="Your Email Address"/>
                        </InputGroup>
                        
                    </div>
                    <div className="textAreaCnt">
                        <Textarea value = {body} onChange = {e=> setbody(e.target.value)} width="450px"  placeholder="How Can We Help" height="200px" />
                    </div>
                    <div className="contentContact">
                        <Button onClick = {handlesubmit} borderRadius="90px" colorScheme="teal" variant="solid" size="180px" className="contactBtn">Submit</Button>
                    </div>

            </div>
            <div className="showAdrss">
                <div className="box">
                    <div className="iconCtn"><GiPositionMarker opacity="0.8"/></div>
                    <div className="adressCtn">

                        <h3> Address</h3>
                        <p>Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018 US</p>
                    </div>
                </div>
                    <div className="box">
                    <div className="iconCtn"><HiOutlinePhone opacity="0.8"/></div>
                    <div className="adressCtn">

                        <h3>Lets Talk</h3>
                        <p className="infoCtn">0657964665</p>
                    </div>
                </div>
                <div className="box">
                    <div className="iconCtn"><BsEnvelope opacity="0.8"/></div>
                    <div className="adressCtn">

                        <h3>Sale Support</h3>
                        <p className="infoCtn">Store@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
</div>
    )
}

export default Contactus
