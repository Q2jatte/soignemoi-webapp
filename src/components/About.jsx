/* About : Articles hopital & services */

import '../css/about.css';
import building from '../assets/images/building.jpg';
import surgery from '../assets/images/surgery.jpg';

function About() {   

    return (
        <section className="about flux">
            <article className="about__article">
                <div className="about__logo"></div>
                <h2 className="about__title">Le CH SoigneMoi : ensemble, construisons un avenir en santé.</h2>
                <img className="about__img" src={building} alt="Photo de l'hopital"/>
                <p className="about__text">Un lieu dédié au bien-être et à la guérison, le Centre Hospitalier SoigneMoi 
                    offre un havre de soins exceptionnels au cœur de notre communauté. Ensemble, construisons un avenir en santé.
                </p>
                <hr className="about__divider"></hr>
                <div className="about__content-button">
                    <button className="min-button button-green">Découvrir</button>
                </div>                              
            </article>

            <article className="about__article">                
                <h2 className="about__title">Pôle d'activités cliniques et médico-techniques.</h2>
                <img className="about__img" src={surgery} alt="Photo d'un bloc opératoire"/>
                <p className="about__text">Les différents services du CH SoigneMoi sont regroupés par discipline
                     médicale dans des entités appelées pôles d’activité. Les services réunis au sein d’un même pôle 
                     partagent un projet médical et des moyens communs. Chaque pôle intègre dans ses activités le soin, 
                     mais aussi la recherche et l’enseignement.
                </p>
                <hr className="about__divider"></hr>
                <div className="about__content-button">
                    <button className="min-button button-green">Découvrir</button>
                </div>                              
            </article>
        </section>        
    );
}

export default About;