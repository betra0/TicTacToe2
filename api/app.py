# api/app.py
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/hello', methods=['GET'])
def hello():
    return jsonify({"message": "Hello, World!"})
@app.route('/', methods=['GET'])
def raiz():
    return 'Hola Mundo'

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)