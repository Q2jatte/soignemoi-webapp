// Presentation Page
import '../css/main.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Accessibility from "../components/Accessibility";


function PresentationPage() {    
  
  return (
    <>
      <Header/>
      <main className="flux">
        <h3>Présentation du Centre Hospitalier SoigneMoi</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
             quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
             Excepteur sint occaecat cupidatat non proident, 
             sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </main>
      <Footer/>
      <Accessibility/>
    </>    
  );
}

export default PresentationPage;