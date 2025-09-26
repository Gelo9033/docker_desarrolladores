
##      State n° 1  (Instalar dependencias)    ##
# imagen base
FROM node:20-alpine as dependencias
# ingresamos al directorio  cd /app
WORKDIR /app
# copia package.json
COPY package.json ./
# instala dependencias
RUN npm install


##      State n° 2 (Construir app)     ##
FROM node:20-alpine as builder
# ingresamos al directorio  cd /app
WORKDIR /app
# copiar desde estapa anterior (copiamos dependencias)
COPY --from=dependencias /app/node_modules  ./node_modules
#copiamos todo el proyecto
COPY . .
# Realizar pruebas
RUN npm run test

##      State n° 3 (Dependencias de produccion)     ##
FROM node:20-alpine as prod-dependencias

# ingresamos al directorio  cd /app
WORKDIR /app
# copiamos package.json
COPY package.json ./
#instala dependencias de produccion
RUN npm install --prod

##      State n° 4 (Ejecutar app)     ##
FROM node:20-alpine as runner
# ingresamos al directorio  cd /app
WORKDIR /app
# copiar desde etapa anterior --prod-dependencias-- (copiamos dependencias de produccion)
COPY --from=prod-dependencias /app/node_modules  ./node_modules
# copiamos archivos necesarios para correr la app
COPY app.js ./
COPY task ./task
# comando para ejecutar la app
CMD [ "node", "app.js" ]











