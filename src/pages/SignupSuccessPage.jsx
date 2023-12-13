// Succès de l'enregistrement
import Header from "../components/Header";
import Footer from "../components/Footer";
import Accessibility from "../components/Accessibility";
import welcome from "../assets/images/welcome.png"

import '../css/signupSuccess.css';
function SignupSuccessPage() {    
  
  return (
    <>
      <Header/>
      <main>
        <section className="success flux">
          <p>Votre compte a été créé avec succès. Connectez-vous pour accèder à l'ensemble des services.</p> 
          <img className="success__image" src={welcome} alt="Bienvenue dans toutes les langues"/>
        </section>
      </main>
      <Footer/>
      <Accessibility/>
    </>    
  );
}

export default SignupSuccessPage;