/* Profile : personal data */

import '../css/profile.css';

function Profile() {   

    return (
        <>
        <section className="profile flux">
            <h2 className="profile__title">Historque des séjours</h2>
            <ul className="profile__items"></ul>
        </section>

        <section className="profile flux">
            <h2 className="profile__title">Informations personnelles</h2>
            <ul className="profile__items"></ul>
        </section>
        </>
    );
}

export default Profile;