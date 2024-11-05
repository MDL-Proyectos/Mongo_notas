# Selecciona una imagen base de Node.js con la versión deseada:
    FROM node:18-alpine
    
    # Establece el directorio de trabajo en /app:
    WORKDIR /app
    
    # Copia el archivo package.json y package-lock.json a /app:
    COPY package*.json .
    
    # Instala las dependencias de la aplicación:
    RUN npm install
    
    # Copia todos los archivos de tu proyecto en el directorio de trabajo:
    COPY . .
    
    # Ejecuta el comando de construcción de Vite.js para compilar la aplicación para producción:
    # RUN npm run build
    
    # Expón el puerto en el que se ejecutará tu aplicación Vite.js:
    EXPOSE 8000
    
    # Define el comando para iniciar la aplicación en modo de desarrollo:
    CMD [ "npm", "run", "dev" ]
    
    # Ejecuta el siguiente comando para construir la imagen Docker:
    # docker build -t mongo-notas .
    #docker build -f C:\Users\pc\source\repos\mongo-notas\Mongo_notas\Dockerfile -t mongo-notas .
    
    # Luego, ejecutar un contenedor a partir de la imagen creada:
    # docker run -p 4000:4000 -d mongo-notas
    # docker run -p 8000:8000 -d mongo-notas
    # docker run --name mongo-notas -p 8000:8000 -d mongo-notas

    #para ver imagen corriendo
    #docker ps -a

    #para detener imagenes
    #docker stop mongonotas
    #docker rm mongonotas