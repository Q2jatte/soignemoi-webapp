// Login Page

import Header from "../components/Header";
import Footer from "../components/Footer";
import Accessibility from "../components/Accessibility";
import LoginSignUpForm from "../components/LoginSignUpForm";

function Login() {    
  
  return (
    <>
      <Header/>
      <main>
        <LoginSignUpForm/>
      </main>
      <Footer/>
      <Accessibility/>
    </>       
  );
}

export default Login;