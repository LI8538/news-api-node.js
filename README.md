# news-api-node.js
site pour api news  https://mediastack.com/ ,
1. inscrire sur le site, récupérer le clée d'api .

2. crée en local environnement serveur avec node js dans le fichier 'app.js' pour récupérer les donée de l'api visée.

3. crée le fichier 'index.html' pour squelette du site,'styless.css' pour le visuelle du site, 'script.js' se charge les donnée et injecte dans le 'index.html'.

4.une fois tout est bon cacher le clée api 
- crée à la racine le .env et le fichier .gitignore , consulte dans les ficher les contenu, et dans le 'app.js' ajoute 'require('dotenv').config();'
et 'const apiKey = process.env.API_KEY';
