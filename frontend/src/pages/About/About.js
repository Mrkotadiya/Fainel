import React,{useRef,useEffect, useState} from 'react'
import { Helmet } from 'react-helmet';
import {Image} from '@chakra-ui/react'
import HashLoader from "react-spinners/HashLoader";
import './aboutcss.css'
const About = () => {
    const Line = useRef(null);
    const text = useRef(null);
    useEffect(() => {
                setTimeout(() =>{
        Line.current.classList.add('lineon')
        text.current.classList.add('titleon');
        },5)


        return () => {

        }
    },[])
    return (
        

        
        <>
        <Helmet>
            <title>About</title>
        </Helmet>


            <div className='headingA'>
                <div className = 'line' ref={Line}>
                </div>
                <h1 className ='title' ref={text}>About Us</h1>
            </div>
            <div className='Content1'>
                <div className = 'text'>
                    <h1>
                        Why?
                    </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quaerat voluptatem, aperiam dolor rem consequatur, deleniti beatae deserunt animi sunt ab! Architecto error veniam eius saepe dolor debitis ratione dignissimos, vel unde eum nulla ex sapiente repellendus ducimus similique inventore autem beatae facilis minima doloribus porro voluptatum nobis obcaecati. Atque quidem, ullam numquam omnis facilis distinctio fugit in esse natus possimus placeat rem tempora eum ex itaque exercitationem sed dolorem laudantium ipsa ratione vel doloribus labore. Quam expedita necessitatibus, commodi quisquam quae molestias dolorem. Libero debitis repellat dolor itaque distinctio optio quod recusandae molestias officia? At provident nesciunt saepe. Eius tempore reiciendis consequuntur amet enim, quis doloremque iusto nisi id neque? Distinctio consequuntur, totam eveniet dolores fugit accusamus quidem maxime, impedit accusantium vero at rem necessitatibus nesciunt ex iste deserunt provident corporis nobis, est praesentium harum quia modi dolor? Placeat eaque quaerat perferendis expedita molestiae tenetur dolore voluptates vitae vero, assumenda maxime necessitatibus? Eligendi quos nihil ipsam deserunt accusantium eos iste, suscipit, numquam sit odio, aperiam commodi sint ut dolore veniam cupiditate veritatis possimus similique explicabo molestias quis distinctio dolores incidunt! Ipsum aspernatur illum et alias quasi voluptate quidem natus nostrum unde repellat beatae cumque quisquam, eveniet eos provident ratione libero consequatur amet vitae. Illum quis, obcaecati delectus voluptatibus quia laborum facere voluptas ipsa animi magni modi nisi quos rerum cum odio tempora perspiciatis, ad est similique enim? Ex ad laboriosam eveniet, voluptates, sed soluta a blanditiis harum placeat sequi reiciendis incidunt sunt, magnam fugit perferendis inventore. Beatae, officia, id ratione voluptatum error ad exercitationem architecto quas eum esse quo est! Illo, cum saepe voluptatem ratione dolorem ut nemo sunt commodi? Itaque sint sequi consequuntur ad doloribus modi, alias numquam cumque, accusantium atque dolorem esse, eius vel quis laudantium ducimus. Aspernatur a repudiandae eos perferendis fuga rerum ullam illo porro.
                    
                </p>
                </div>
               
                   <div className ='imagecontainer'>
                    <div className = 'Imageabt'>
                    <Image className='mImage' boxSize = '400px' objectFit="cover" src='https://assets.architecturaldigest.in/photos/631759df5792eaac28e1bd8a/16:9/pass/In%20this%20minimalist%20pan-Asian%20Surat%20restaurant,%20the%20ceiling%20steals%20the%20show.jpg' alt="Segun Adebayo"/>
                    </div>
                   </div>
            </div>
            <div className ='Content2'>
                   
                   <div className ='imagecontainer'>
                    <div className = 'Imageabt'>
                    <Image className='mImage' boxSize = '400px' objectFit="cover" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3II7va9o05Qgdr6ebB1Zws0sAIKgpe8iOlUeQexPSWAns9JYq1nRL3ctFT8ucr4vNutzUfjHEjk&usqp=CAU&ec=48665701' alt="Segun Adebayo"/>
                    </div>
                   </div>
                   <div className = 'text'>
                    <h1>
                        How?
                    </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, eveniet! Doloremque neque porro facilis suscipit eum ratione excepturi repellendus pariatur voluptatem, adipisci, reprehenderit laboriosam aperiam dolore explicabo odio molestias accusantium voluptatum nulla veniam nihil magnam! Alias at culpa sint eius voluptate, quos a dolorum, excepturi inventore possimus nobis. Error illo ipsam et! Fugiat itaque ipsam saepe voluptatum reprehenderit ad, laborum placeat dolor ullam. Neque modi minima voluptatibus soluta possimus, vel, ab iusto aspernatur veniam, impedit facilis fugit officia necessitatibus nihil. Vero natus velit asperiores, rem, eum corporis et tempora suscipit quia vel nam sint aliquid quae. Accusamus ullam rerum eveniet.
                    

                </p>
                </div>
            </div>
        </>
    
    )
}

export default About
