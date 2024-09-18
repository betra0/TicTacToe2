-- Crear una base de datos con la codificación utf8mb4

-- Cambiar codificacion a ISO8859-1 si da problema los caracteres especiales en mysql

CREATE DATABASE IF NOT EXISTS mydatabase
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

-- Seleccionar la base de datos
USE mydatabase;

-- Crear una tabla de ejemplo con la codificación utf8mb4
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    correo VARCHAR(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci UNIQUE NOT NULL
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Insertar algunos datos de ejemplo
INSERT INTO usuarios (nombre, correo) VALUES
('Juan Pérez', 'juan.perez@example.com'),
('Ana Gómez', 'ana.gomez@example.com');