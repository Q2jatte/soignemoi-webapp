# SoigneMoi Web App

![Static Badge](https://img.shields.io/badge/ReactJS-reactjs?logo=reactjs)


This application is the showcase website for SoigneMoi Hospital. Visitors can retrieve information about the services offered by the hospital. They can also book a stay at the hospital.

## Prerequisites
To function, this application requires the local "api-soignemoi" service to be running.

[Api SoigneMoi repository](https://github.com/Q2jatte/soignemoi-api.git)

Make sure you have the following installed before getting started:

- NodeJS
- npm

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/Q2jatte/soignemoi-webapp.git
    ```

2. Navigate to the project directory:

    ```bash
    cd soignemoi-webapp
    ```

3. Install dependances using npm :

    ```bash
    npm install
    ```
    
4. Create a environement file .env into the root directory. This project need 4 values :

    ```bash
    # API root directory
    VITE_API_ROOT_URL=http://127.0.0.1:8000/api
    # Google map key
    VITE_GOOGLE_MAPS_API_KEY=your_map_api_key
    # Google reCaptcha site key
    VITE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
    # Google reCaptcha secret key
    VITE_RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key
    ```
    Copy this code into the .env file and customize the different keys. If you don't have reCAPTCHA keys, it is necessary to comment out line 64 in the src\components\SignUpForm.jsx file and uncomment the following line.

5. Run server

    ```bash
    npm run dev
    ```
    
6. Access the web app by following the URL provided in the command prompt.

    ```bash
    ➜  Local:   http://localhost:5173/
    ```    


## Contribution

Project entirely created by Eric Terrisson as part of the preparation for his Bachelor's degree in Application Designer and Developer.

## License

MIT License.


