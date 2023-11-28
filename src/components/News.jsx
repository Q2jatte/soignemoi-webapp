import React, { useState, useEffect } from 'react';
import '../css/news.css'
import swimmer from '../assets/carouselImage/swimmer.jpg';
import autumn from '../assets/carouselImage/autumn.jpg';
import lighthouse from '../assets/carouselImage/lighthouse.jpg';


function News() {
    const interval = 10_000; // intervalle de temps entre les slides
    const [index, setIndex] = useState(0); 
    const imgList = [swimmer, autumn, lighthouse];
    let intervalId;

    // Fonction pour incrémenter l'index de 1
    const incrementIndex = () => {
        setIndex((prevIndex) => (prevIndex + 1) % imgList.length);        
    };

    // Fonction pour passer un index
    const handleIndexChange = (newIndex) => {
        setIndex((prevIndex) => (newIndex + imgList.length) % imgList.length);
      };

    // Utilisation de useEffect pour démarrer l'incrémentation automatique
    useEffect(() => {
        intervalId = setInterval(() => {
            incrementIndex();
          }, interval);

        // Nettoyer l'intervalle lorsque le composant est démonté
        return () => clearInterval(intervalId);
    }, [index, interval]);

    const handleNextClick = () => {        
        incrementIndex();
    };

    const handlePrevClick = () => {        
        setIndex((prevIndex) => (prevIndex - 1 + imgList.length) % imgList.length);
    };    

    return (
        <section className="carousel flux">            
            <div className="carousel__content">            
                <img className="carousel__img" src={imgList[index]} alt=""/>
                <div className="carousel__prev" onClick={handlePrevClick}></div>
                <div className="carousel__next" onClick={handleNextClick}></div>
                <div className="carousel__bar">
                    {imgList.map((item, idx) => (
                        <div
                        key={idx}
                        className={`carousel__circle ${index === idx ? 'active' : ''}`}
                        onClick={() => handleIndexChange(idx)}
                      ></div>
                    ))}
                </div>
            </div>
        </section>
        
    );
}

export default News;