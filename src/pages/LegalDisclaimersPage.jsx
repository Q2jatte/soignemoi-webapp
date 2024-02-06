// Legal disclaimers Page
import Header from "../components/Header";
import Footer from "../components/Footer";
import Accessibility from "../components/Accessibility";

function LegalDisclaimersPage() {    
  
  return (
    <>
      <Header/>
      <main>
        <section className="flux">
        <h1>Ce site a été créé dans le cadre de la préparation d'un bachelor en conception et développement d'applications. Toutes les informations présentées sont purement fictives et ne reflètent aucune réalité.</h1>
        <br/>
        <h2>1 – PRÉSENTATION DU SITE INTERNET :</h2>
        <p>En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique, ce site internet est la propriété de :
        CH SOIGNEMOI
        SIREN: 000 000 000        
        59150 Wattrelos
        01.23.45.67.893.20.44.59.62

        Directeur de la publication :

        Eric Terrisson 

        Hébergeur :

        GANDI – 63-65 boulevard Masséna 75013 Paris – France.

        Crédits photos

        Les illustrations sont issues du site pixbay.com        
        </p>
        <br/>
        <h2>2 – PROPRIÉTÉS INTELLECTUELLES</h2>
        <p>Le Centre Hospitalier est titulaire des droits de propriété intellectuelle sur tous les éléments accessibles sur ce site internet, notamment les textes, images, graphismes, logos, vidéos, icônes et sons. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable du Centre Hospitalier.
        Toute exploitation non autorisée sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
        </p>
        <br/>
        <h2>3 – GESTION ET  TRAITEMENT DES DONNÉES PERSONNELLES</h2>
        <p>Lors qu’en tant que visiteur vous vous rendez sur ce site vos données sont susceptibles d’être traitée pour les finalités suivantes :

        Amélioration la navigation et analyses statistiques sur le site grâce aux données de connexion et d’utilisation.
        Gestion des formulaires contact : nom, prénom, email, nom du service, nom du praticien, documents administratif, demandes de renseignements.</p>
        <br/>
        <h2>4 – GESTION DES COOKIES</h2>
        <p>Un « cookie » est un petit fichier d’information envoyé sur le navigateur de l’utilisateur et enregistré au sein du terminal de l’utilisateur. Ce fichier comprend des informations telles que le nom de domaine de l’utilisateur, le fournisseur d’accès Internet

        Le Centre Hospitalier est susceptible de traiter les informations de l’utilisateur concernant sa visite du site, telles que les pages consultées, les recherches effectuées. Ces informations permettent
        d’améliorer le contenu du site, de la navigation de l’utilisateur. Ces indicateurs sont collectés via notre outil d’analyses Google Analytics.

        Vous pouvez confirmation votre autorisation à la gestion des cookies en cliquant sur le bandeau d’informations présents lors de votre première visite ou en continuant la navigation sur notre site.
        </p>
        <br/>
        <h2>5 – DROIT APPLICABLE ET ATTRIBUTION DE JURIDICTION</h2>
        <p>Tout litige en relation avec l’utilisation de ce site est soumis au droit français. En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris.
        </p>
        <br/>
        <h2>6 – COMPATIBILITÉ NAVIGATEUR</h2>
        <p>La compatibilité du site et de son administration est garantie avec les navigateurs suivants :</p>
            <ul>
                <li>Internet Explorer</li>
                <li>Microsoft Edge</li>
                <li>Firefox</li>
                <li>Safari</li>
                <li>Opéra</li>
                <li>Google Chrome</li>
            </ul>
        <p>Pour les autres navigateurs ou versions, nous ne pouvons garantir un fonctionnement optimal du site.</p>
        <br/>
        <h2>7 – CNIL</h2>
        <p>
        Conformément à la loi n° 78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés, nous vous informons que les données recueillies par l »intermédiaire d’un formulaire ou autre ne sauraient en aucun cas être transmises, à titre gratuit ou onéreux, à des tierces personnes physiques ou morales.

        Vous pouvez à tout moment accéder aux informations personnelles vous concernant et détenues, demander leur modification ou leur suppression par l’envoi d’un mail et un justificatif d’identité à dpo@soignemoi.com

        Pour plus d’information, contactez notre référent CNIL au 01.23.45.67.89
        </p>
        </section>
        
      </main>
      <Footer/>
      <Accessibility/>
    </>    
  );
}

export default LegalDisclaimersPage;