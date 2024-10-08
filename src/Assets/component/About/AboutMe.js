<<<<<<< HEAD
import './About.scss';
import React , { useState } from 'react';
import { useTranslation } from "react-i18next";

import { GiThink, GiAxolotl, GiHeartOrgan, GiBrain } from "react-icons/gi";
import { FaLaptopCode} from "react-icons/fa";
import { TiArrowLeftOutline, TiArrowRightOutline } from "react-icons/ti";
import { IoGameController } from "react-icons/io5";

import circulo from "../../images/CirculoRosa.png"
import love from '../../images/LovePortrait.png';
import cuadrado from '../../images/cuadroazul.png';
import core from '../../images/CorePortrait.png';
import verde from '../../images/CuadroVerde.png';
import work from '../../images/WorkPortrait.png';
/*global slides*/
const AboutMe =() =>{
    const slides = [
        {id: 1,
        name: 'about',
         image: cuadrado,
         image2: core ,
         title: "¡¡¡Hola!!!",
         icon: <GiThink/>,
         description: " Bienvenidos a mi portafolio soy Camila Rovirosa una desarrolladora entusiasta y trabajadora en busca de nuevas oportunidad que me permitan aprender y explorar diferentes proyectos. Ya sea que hayas caído aquí por accidente o me hayas encontrado en alguna aplicación espero te des el tiempo para pasear por esta pequeña página. ",
         style: "cuadro",
         style1: "img2 img-scaleC",
        },
        {id: 2,
            name:'hobbies',
            image: circulo,
            image2: love ,
            style: "circulo",
            style1: "img1 img-scale",
        title: "Mis Hobbies" ,
        icon: <GiAxolotl/>,
        description: "En mi tiempo libre disfruto dejugar videojuegos, mis favoritos son Final Fantasy XIII, The Legend of Zelda Twilight Princess y Tetris 99. Paso el tiempo aprendiendo dibujo y animación para mis proyectos personales. Hace dos años empecé un pequeño huerto que poco a poco a crecido.",
        },
        {id: 3,
            name:'work',
            image: verde,
            image2: work ,
            style: "verde",
            style1: "img3 img-scaleV",
        title: "Estilo de Trabajo",
        icon: <GiBrain/>,
        description: "Soy ingeniera en tecnologías computacionales graduada del Tecnológico de Monterrey en la ciudad de México. Me gusta trabajar en trabajar con equipos o individual. Siempre estoy buscando aprender algo por lo que sigo tomando cursos de UX/UI, desarrollo web y diseño de videojuegos.",
        },
    ];
    

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };



    return( 
        <section name='about' className='about'>  
            <div className='about-container'>             
                <div className='title'>
                    <h2 id="h2">{slides('aboutTitle')}</h2>
                </div>
                <div className='title__arrA'>
                    <GiHeartOrgan/>
                    <span> </span>
                    <IoGameController/>
                    <span> </span>
                    <FaLaptopCode/>
                        
                </div>
                <div className='slider' >  
                    <div className='slider__item'>
                                        
                        <div className='slider__pic'>
                            <div className="slider__pic--holder"  onClick={nextSlide}>
                                <img src={slides[current].image} className={slides[current].style} alt={slides[current].id}/>
                                <img src={slides[current].image2} className={slides[current].style1} alt={slides[current].id}/>
                            </div>                                
                        </div>
                        <div className="slider__content">
                            
                                <div className="slider__title space">{slides[current].title}
                                <span className=" space">{slides[current].icon} </span>
                                </div>
                                <div className="slider__text">{slides[current].description}</div>
                                <div className='arrow'>
                                
                                
                                    <TiArrowLeftOutline className='slider__content--arrow ' onClick={nextSlide}/>
                                    
                                    <TiArrowRightOutline className='slider__content--arrow'onClick={prevSlide}/>
                                    
                                </div>
                            
                        </div>  
                        
                    </div>
                    
                </div >
            </div>
        </section>
    );
}
=======
import './About.scss';
import React , { useState } from 'react';
import { useTranslation } from "react-i18next";

import { GiThink, GiAxolotl, GiHeartOrgan, GiBrain } from "react-icons/gi";
import { FaLaptopCode} from "react-icons/fa";
import { TiArrowLeftOutline, TiArrowRightOutline } from "react-icons/ti";
import { IoGameController } from "react-icons/io5";

import circulo from "../../images/CirculoRosa.png"
import love from '../../images/LovePortrait.png';
import cuadrado from '../../images/cuadroazul.png';
import core from '../../images/CorePortrait.png';
import verde from '../../images/CuadroVerde.png';
import work from '../../images/WorkPortrait.png';

const AboutMe =() =>{
    const {t} = useTranslation();
    

    const [current, setCurrent] = useState(0);
    const length = t('slides').length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };



    return( 
        <section name='about' className='about'>  
            <div className='about-container'>             
                <div className='title'>
                    <h2 id="h2">{t('aboutTitle')}</h2>
                </div>
                <div className='title__arrA'>
                    <GiHeartOrgan/>
                    <span> </span>
                    <IoGameController/>
                    <span> </span>
                    <FaLaptopCode/>
                        
                </div>
                <div className='slider ' >  
                    <div className='slider__item'>
                                        
                        <div className='slider__pic'>
                            <div className="slider__pic--holder"  onClick={nextSlide}>
                                <img src={slides[current].image} className={slides[current].style} alt={slides[current].id}/>
                                <img src={slides[current].image2} className={slides[current].style1} alt={slides[current].id}/>
                            </div>                                
                        </div>
                        <div className="slider__content">
                            
                                <div className="slider__title space">{slides[current].title}
                                <span className=" space">{slides[current].icon} </span>
                                </div>
                                <div className="slider__text">{slides[current].description}</div>
                                <div className='arrow'>
                                
                                
                                    <TiArrowLeftOutline className='slider__content--arrow ' onClick={nextSlide}/>
                                    
                                    <TiArrowRightOutline className='slider__content--arrow'onClick={prevSlide}/>
                                    
                                </div>
                            
                        </div>  
                        
                    </div>
                    
                </div >
            </div>
        </section>
    );
}
>>>>>>> parent of ff71444 (new buil)
export default AboutMe;