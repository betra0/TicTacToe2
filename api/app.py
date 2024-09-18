# api/app.py
from flask import Flask, jsonify, request
import os
import mysql.connector
from mysql.connector import Error
import logging


app = Flask(__name__)
host=os.environ.get('MYSQL_HOST')  
user=os.environ.get('MYSQL_USER')  
password=os.environ.get('MYSQL_PASSWORD')  
database=os.environ.get('MYSQL_DB')
""" host='LOCALHOST'
user='root'
password='12345'
database='mydatabase' """


logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

def create_connection():
    try:
        connection = mysql.connector.connect(
            host=host,  # Cambia esto por tu host si no es localhost
            user=user,  # Cambia esto por tu nombre de usuario
            password=password,  # Cambia esto por tu contraseña
            database=database,  # Cambia esto por el nombre de tu base de datos
            charset='utf8mb4',
        )
        
        if connection.is_connected():
            print("Conexión exitosa a la base de datos")
            return connection

    except Error as e:
        print(f"Error al conectar a MySQL: {e}")
        return None

@app.route('/hello', methods=['GET'])
def hello():
    return jsonify({"message": "Hello, World!"})

@app.route('/', methods=['GET'])
def raiz():
    return 'Hola Mundo'

@app.route('/usuarios', methods=['GET'])
def get_usuarios():
    connection = create_connection()
    if connection is None:
        return jsonify({"error": "No se pudo conectar a la base de datos"}), 500

    try:
        cursor = connection.cursor(dictionary=True)
        cursor.execute("SELECT * FROM usuarios")
        usuarios = cursor.fetchall()
        print('los usuarios son', usuarios)
        logger.debug(f"Usuarios obtenidos: {usuarios}")
        return jsonify(usuarios)
    except Error as e:
        print(f"Error al consultar la base de datos: {e}")
        return jsonify({"error": "Error al consultar la base de datos"}), 500
    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)