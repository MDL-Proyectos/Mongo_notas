# MongoNotas Backend

## 📋 Descripción
Backend para la aplicación MongoNotas, desarrollado como parte de un proyecto universitario. Esta API REST está construida con Express.js y MongoDB, demostrando la implementación de un servidor backend moderno con arquitectura MVC.

### 🔧 Tecnologías Utilizadas
- Node.js con Express.js (69.6%)
- EJS como motor de plantillas (18.9%)
- Docker (11.5%)
- MongoDB
- REST API

## 🚀 Características
- API REST para gestión de notas
- Integración con MongoDB para persistencia de datos
- Arquitectura MVC (Modelo-Vista-Controlador)
- Containerización con Docker
- Plantillas EJS para vistas del servidor

## ⚙️ Requisitos Previos
- Node.js
- Docker
- MongoDB
- npm o yarn

## 🛠️ Instalación y Configuración

1. Clonar el repositorio:
```bash
git clone https://github.com/MDL-Proyectos/Mongo_notas.git
cd Mongo_notas
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
Crear un archivo `.env` con las siguientes variables:
```env
MONGODB_URI=tu_uri_de_mongodb
PORT=3000
```

4. Iniciar con Docker:
```bash
docker build -t mongo-notas-backend .
docker run -p 3000:3000 mongo-notas-backend
```

## 🔄 Endpoints de la API
- `GET /notas` - Obtener todas las notas
- `POST /notas` - Crear una nueva nota
- `PUT /notas/:id` - Actualizar una nota existente
- `DELETE /notas/:id` - Eliminar una nota

## 🎯 Contexto del Proyecto
Este proyecto fue desarrollado como parte de un trabajo universitario para demostrar competencias en:
- Desarrollo Backend con Express.js
- Bases de datos NoSQL (MongoDB)
- Arquitectura MVC
- Containerización con Docker
- Integración de plantillas EJS

> **Nota**: Como proyecto académico, se centra en la implementación básica de estas tecnologías. No incluye características avanzadas como logging extensivo o validaciones complejas.

## 🔗 Proyectos Relacionados
- [Frontend de MongoNotas](https://github.com/MDL-Proyectos/mongo-notas-front) - Interfaz de usuario desarrollada en JavaScript
