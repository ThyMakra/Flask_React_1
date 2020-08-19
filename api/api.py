import time
from flask import Flask

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

""" In recent releases of Flask your view function can return a dictionary, 
which gets automatically JSONified by Flask. """