// Home Page
import { useState } from "react"


function Home() {

    const [showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }
  
  return (
    <>
    <header className="header">
        <div className="header__content flux">
            <div className="header__logo"></div>
            <ul className={`header__links ${showLinks ? 'header__menu-show' : 'header__menu-hide'}`}>
                <li className="header__item"><a href="" className="header__link">Accueil</a></li>
                <li className="header__item"><a href="" className="header__link">Séjour</a></li>
                <li className="header__item"><a href="" className="header__link">Services</a></li>
                <li className="header__item"><a href="" className="header__link">A propos</a></li>
            </ul>
            <button className="header__burger" onClick={handleShowLinks}>
                <span className="header__burger--bar"></span>            
            </button> 
        </div>        
    </header>
    </>
    
  )
}

export default Home
