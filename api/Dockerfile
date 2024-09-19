# Dockerfile para Flask
FROM python:3.12-slim

# Crear el directorio de trabajo
WORKDIR /app

# Copiar el archivo de requerimientos
COPY requirements.txt requirements.txt

# Instalar dependencias
RUN pip install --upgrade pip 
RUN pip install --no-cache-dir -r requirements.txt

# Copiar el resto del código de la API
COPY . .

# Exponer el puerto en el que la API escuchará
EXPOSE 5000
# Definir el comando para ejecutar la aplicación
# Definir el comando para ejecutar la aplicación
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "wsgi:app"]
#CMD ["flask", "run", "--host=0.0.0.0"]

