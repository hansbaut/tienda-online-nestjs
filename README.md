# Tienda Online API - NestJS

API REST para gestión de tienda online construida con NestJS + TypeORM + MySQL.

## Requisitos
- Node.js v18+
- MySQL (XAMPP)

## Instalación

1. Clonar el repositorio
git clone <url-del-repo>
cd tienda-online

2. Instalar dependencias
npm install

3. Crear archivo .env en la raíz
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=
DB_NAME=tienda_db

4. Crear la base de datos tienda_db en phpMyAdmin

5. Correr el proyecto
npm run start:dev

## Documentación
http://localhost:3000/docs

## Endpoints
- GET/POST/PATCH/DELETE /clientes
- GET/POST/PATCH/DELETE /categorias
- GET/POST/PATCH/DELETE /productos
- GET/POST/PATCH/DELETE /ordenes
- GET/POST/PATCH/DELETE /orden_producto