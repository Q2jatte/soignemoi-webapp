// Activities Page
import '../css/main.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Accessibility from "../components/Accessibility";


function ActivitiesPage() {    
  
  return (
    <>
      <Header/>
      <main className="flux">
        <h3>Pôle d’Anesthésie – Réanimation – Péri-opératoire et Douleur</h3>
        <ul>
            <li>Chef de Pôle : Dr Alice Dubois</li>
            <li>Directeur : Maxime MARTIN</li>
            <li>Cadre supérieur de Pôle : Laurence DUPONT</li>
            <li>Cadre gestionnaire : Charlotte MARTINEZ</li>
        </ul>
        <br/>
        <h3>Pôle Biologie Pathologie Génétique</h3>
        <ul>
            <li>Chef de Pôle : Pr François DUPONT</li>
            <li>Directrice : Pauline MARTIN</li>
            <li>Cadre supérieur de Pôle : Laurence DURAND</li>
            <li>Cadres gestionnaires : Matthieu DUPUIS</li>
        </ul>
        <br/>
        <h3>Fédération de cancérologie</h3>
        <ul>
            <li>Médecin référent : Dr André LEGRAND</li>
            <li>Directrice : Marine LEBLANC</li>
            <li>Cadre supérieur de Pôle : Muriel LAMBERT</li>
        </ul>
      </main>
      <Footer/>
      <Accessibility/>
    </>    
  );
}

export default ActivitiesPage;