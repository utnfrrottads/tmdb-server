# tmdb cache server

# Instalacion
Instalar git https://git-scm.com/downloads

## Para Linux y Mac
Instalar nvm (Node Version Manager)
https://github.com/creationix/nvm

````
nvm install 6
````
antes de correr la aplicacion:
````
nvm use 6
````

## For Windows
Podes usar:
https://github.com/hakobera/nvmw
y despues
````
nvm install 6
````
antes de correr la aplicacion:
````
nvm use 6
````

No probe con versiones mas nuevas pero deberia funcionar

## Para cualquier entorno ejecutar:
````
git clone https://github.com/ttads/tmdb-server.git
cd tmdb-server
npm install
npm start
````

# Para correr el servidor

Este ejemplo usa la API REST de https://www.themoviedb.org/, para usar esta api es necesario registrarse en el sitio para obtener una KEY de la API. La clave se envia por mail despues de completar algunos datos sobre la aplicacion, en los diferentes campos aclarar que se trata de una aplicacion de ejemplo para la facultad.

Antes de correr ``npm start` deberias setear la API Key en el codigo fuente (/server/api/movies/movies.controller.js) linea 14:

## Para probar si esta funcionando
````
npm start
````
apuntar el postman o el navegador web para hacer un get a  http://localhost:9000/api/movies

Otros endpoints disponibles son:
````
/info/:movieId
/configuration
/playing
/search/:query
````

# tmdb cache server English

# Installation
install git https://git-scm.com/downloads

## For Linux and Mac
Install nvm (Node Version Manager)
https://github.com/creationix/nvm

````
nvm install 6
````
then before running the app:
````
nvm use 6
````

## For Windows
You can use:
https://github.com/hakobera/nvmw
and then
````
nvm install 6
````
the before runn ing the app:
````
nvm use 6
````

I haven't tested with newer versions but it should work anyway.

## For both envs
````
git clone https://github.com/aotaduy/angular-example.git
cd tmdb-server
npm install
npm start
````

# Run the app

The movie db example application uses the REST API at https://www.themoviedb.org/, to use this api you need an API Key from the site. You should create an account and ask for the key. They will send you it to you by email.

Before running ``npm start` you should set the API KEy in the sorce code (/server/api/movies/movies.controller.js) line 14:

## To run the app
````
npm start
````
point your browser to http://localhost:9000  if you have the APIKEY
