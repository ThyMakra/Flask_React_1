All the steps:
1. Create a starter react project
        
        $ npx create-react-app flask_react_app
        $ cd flask_react_app

2. Create a Flask API Backend
    1. Add a top-level subdirectory for Flask project
            
            $ mkdir api
            $ cd api

    2. Create a virtual environment

            $ python3 -m venv venv
            $ source venv/bin/activat

            pip install flask python-dotenv

    - Note: 

        The Flask project can have any structure, as long as its root is this new api subdirectory. It can use large and complex structures such as those in 
            - [Flask Mega-Tutorial](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world)
            - [O'Reilly Flask book](https://www.amazon.com/Flask-Web-Development-Developing-Applications/dp/1491991739)
        Here we use a much simpler single file, single endpoint applications.
        
        - See more in api/api.py
    
3. React Configuration Changes
    
    To improve the integration between the React and the Flask sides, we need to change the configuration in package.json:
    1. Set up "proxy" redirection from React to Flask. \
    In most deployments, the frontend files and the API endpoints are all served from the same domain and port, which makes everything work seamlessly by avoiding __cross-origin issues__.\
    Adding a `proxy` key at the bottom of `package.json`

            {
                ... leave all other configuration options alone ...

            "proxy": "http://localhost:5000"
            }

    2. Add a custom command in `scripts` key.

            "scripts": {
                "start": "react-scripts start",
                "start-api": "cd api && venv/bin/flask run --no-debugger",
                "build": "react-scripts build",
                "test": "react-scripts test",
                "eject": "react-scripts eject"
            },

        > Here, we use the virtual environment path for the flask command so that we don't need to have the virtual environment activated. \
        So in the context of the Flask process, all imports will work in the same way as with an activated virtual environment.
        
        > `--no-debugger`. \
        Since this Flask backend is strictly an API server, we will never be serving complete pages, so having the `browser-based debugger` enabled serves no purpose, as it's just going to mess up the JSON responses that the API returns.\
        You will see stack traces of your errors in the terminal.