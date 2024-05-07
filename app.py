pip install flask
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('music_player.html')

if __name__ == '__main__':
    app.run(debug=True)