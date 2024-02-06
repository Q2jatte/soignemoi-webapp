// Importation des fonctionnalités de React
import React, { useState, useEffect } from 'react';

// Importation des styles CSS
import '../css/news.css';

// Importation des images du carrousel
import swimmer from '../assets/carouselImage/swimmer.jpg';
import autumn from '../assets/carouselImage/autumn.jpg';
import lighthouse from '../assets/carouselImage/lighthouse.jpg';

// Définition du composant fonctionnel News
function News() {
    
    // Intervalle de temps entre les slides du carrousel
    const interval = 10_000;
    
    // État pour gérer l'index actuel du carrousel
    const [index, setIndex] = useState(0); 
    
    // Liste des images du carrousel
    const imgList = [swimmer, autumn, lighthouse];
    
    // Identifiant de l'intervalle pour l'incrémentation automatique du carrousel
    let intervalId;

    // Fonction pour incrémenter l'index de 1
    const incrementIndex = () => {
        setIndex((prevIndex) => (prevIndex + 1) % imgList.length);        
    };

    // Fonction pour changer l'index du carrousel
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

    // Fonction pour gérer le clic sur le bouton suivant du carrousel
    const handleNextClick = () => {        
        incrementIndex();
    };

    // Fonction pour gérer le clic sur le bouton précédent du carrousel
    const handlePrevClick = () => {        
        setIndex((prevIndex) => (prevIndex - 1 + imgList.length) % imgList.length);
    };    

    // Rendu du composant
    return (
        <section className="carousel flux">            
            <div className="carousel__content">            
                {/* Image du carrousel */}
                <img className="carousel__img" src={imgList[index]} alt=""/>
                
                {/* Bouton précédent du carrousel */}
                <div className="carousel__prev" onClick={handlePrevClick}></div>
                
                {/* Bouton suivant du carrousel */}
                <div className="carousel__next" onClick={handleNextClick}></div>
                
                {/* Barre de navigation du carrousel avec des cercles indicatifs */}
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

// Exportation du composant News en tant que composant par défaut
export default News;
