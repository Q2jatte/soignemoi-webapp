// Home Page
import Cta from "../components/Cta";
import Header from "../components/Header";
import News from "../components/News";
import About from "../components/About";
import Footer from "../components/Footer";
import Accessibility from "../components/Accessibility";


function Home() {    
  
  return (
    <>
      <Header/>
      <main>
        <News/>
        <Cta/>
        <About/>   
      </main>
      <Footer/>
      <Accessibility/>
    </>    
  );
}

export default Home
