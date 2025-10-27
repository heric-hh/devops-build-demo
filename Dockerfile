# Usamos una imagen base ligera de Node.js (recomendado para producción)
FROM node:20-alpine

# Crear el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar los archivos de configuración y dependencias
# para aprovechar el caché de Docker
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el código fuente de la aplicación
COPY . .

# El contenedor escuchará en este puerto
EXPOSE 3000

# Comando para ejecutar la aplicación cuando el contenedor inicie
CMD ["node", "server.js"]