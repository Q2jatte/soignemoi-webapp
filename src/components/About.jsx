/* About : Articles hopital & services */

// Importation des styles CSS
import '../css/about.css';

// Importation du composant Link de react-router-dom pour la navigation
import { Link } from 'react-router-dom';

// Importation des images
import building from '../assets/images/building.jpg';
import surgery from '../assets/images/surgery.jpg';

// Définition du composant fonctionnel About
function About() {   

    // Rendu du composant
    return (
        <section className="about flux">
            {/* Premier article */}
            <article className="about__article">
                {/* Logo du CH */}
                <div className="about__logo"></div>

                {/* Titre de l'article */}
                <h2 className="about__title">Le CH SoigneMoi : ensemble, construisons un avenir en santé.</h2>

                {/* Image de l'hôpital avec un texte alternatif */}
                <img className="about__img" src={building} alt="Photo de l'hôpital"/>

                {/* Description de l'article */}
                <p className="about__text">Un lieu dédié au bien-être et à la guérison, le Centre Hospitalier SoigneMoi 
                    offre un havre de soins exceptionnels au cœur de notre communauté. Ensemble, construisons un avenir en santé.
                </p>

                {/* Ligne de séparation */}
                <hr className="about__divider"></hr>

                {/* Bouton avec lien vers la page d'activités */}
                <div className="about__content-button">
                    <Link to="/activities">
                        <button className="min-button button-green">Découvrir</button>
                    </Link>
                </div>                              
            </article>

            {/* Deuxième article */}
            <article className="about__article">                
                {/* Titre de l'article */}
                <h2 className="about__title">Pôle d'activités cliniques et médico-techniques.</h2>

                {/* Image d'un bloc opératoire avec un texte alternatif */}
                <img className="about__img" src={surgery} alt="Photo d'un bloc opératoire"/>

                {/* Description de l'article */}
                <p className="about__text">Les différents services du CH SoigneMoi sont regroupés par discipline
                     médicale dans des entités appelées pôles d’activité. Les services réunis au sein d’un même pôle 
                     partagent un projet médical et des moyens communs. Chaque pôle intègre dans ses activités le soin, 
                     mais aussi la recherche et l’enseignement.
                </p>

                {/* Ligne de séparation */}
                <hr className="about__divider"></hr>

                {/* Bouton avec lien vers la page d'activités */}
                <div className="about__content-button">
                    <Link to="/activities">
                        <button className="min-button button-green">Découvrir</button>
                    </Link>
                </div>                              
            </article>
        </section>        
    );
}

// Exportation du composant About en tant que composant par défaut
export default About;
