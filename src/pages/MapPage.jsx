// Map Page
console.log(process.env.NODE_ENV);
import Header from "../components/Header";
import Footer from "../components/Footer";
import Accessibility from "../components/Accessibility";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

// Récupérez votre clé API depuis le fichier .env
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
console.log(import.meta.env.VITE_GOOGLE_MAPS_API_KEY);

// Définissez les coordonnées initiales
const defaultCenter = { lat: 50.70425796508789, lng: 3.2130157947540283 };

function MapPage() {   
    
    const { isLoaded, loadError } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKey,
      });
    
    if (loadError) {
    return <div>Error loading Google Maps</div>;
    }

    if (!isLoaded) {
    return <div>Loading...</div>;
    }
  
    return (
        <>
        <Header/>
        <main>
            <section className="flux">
                <GoogleMap
                mapContainerStyle={{ height: "400px", width: "100%" }}
                center={defaultCenter}
                zoom={12}
                options={{
                    disableDefaultUI: true, // Désactivez les contrôles par défaut de Google Maps
                }}
                clickableIcons={false} // Désactivez l'icône de clic
                >
                {/* Placez un marqueur sur la carte */}
                <Marker position={defaultCenter} />
                </GoogleMap>
            </section>
        </main>
        <Footer/>
        <Accessibility/>
        </>    
    );
}

export default MapPage;
