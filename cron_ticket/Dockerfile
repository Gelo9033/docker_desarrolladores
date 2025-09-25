FROM node:20-alpine

# cd /app
WORKDIR /app

#destino  asi /app
COPY package.json ./

# instala dependencias
RUN npm install

#copy copia archivos necesarios asia que directorio
COPY . .

# Realizar pruebas
RUN npm run test

#elimina archivos innecesarios para produccion
RUN rm -rf test && rm -rf node_modules

#instala dependencias de produccion
RUN npm install --prod

# comando para ejecutar la app
CMD [ "node", "app.js" ]
