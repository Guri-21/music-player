from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('playlist.html')

@app.route('/create_playlist', methods=['POST'])
def create_playlist():
    playlist_name = request.form.get('playlistName')

    # Add logic here to create the playlist (store in a database, etc.)

    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
