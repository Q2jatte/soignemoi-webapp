// Stay Page : réservation du séjour

import Header from "../components/Header";
import Footer from "../components/Footer";
import Accessibility from "../components/Accessibility";
import StayForm from "../components/StayForm";

function StayPage() {
  
  return (
    <>
      <Header/>
      <main>
        <StayForm/>
      </main>
      <Footer/>
      <Accessibility/>
    </>       
  );
}

export default StayPage;