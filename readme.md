# Pokedex

## Description :

Exercice issu d'un test technique.
Objectif : developper un front responsive et une API permettant d'afficher une liste de pokemon.

## Démo disponible ici : [https://pokedex.cedric-josso.net](https://pokedex.cedric-josso.net)

## Technologies utilisées

- Symfony skeleton + doctrine + twig
- Javascript vanilla
- CSS vanilla
- Interaction entre front et bdd via une mini API

## prérequis

- un acces internet pour permettre l'appel d'une API externe (PokeApi qui fournira a notre base de données la liste des pokemons)
- un serveur web tournant sur apache avec un SGBD installé et PHP >= 7.0
- un acces au terminal

## installation

- Installer les dépendances

En terminal, depuis la racine du projet
```
composer install
```

- Configurer le .env.local

Créer un fichier `.env.local` à la racine du projet et ajouter une des lignes suivantes en adaptant db_user, db_password, db_name et serverVersion en fonction de votre configuration

Quelques exemples (choisir la ligne appropriée et adapter)
```bash
# Si utilisation de sqlite
DATABASE_URL="sqlite:///%kernel.project_dir%/var/data.db"

# Si utilisation de mysql
DATABASE_URL="mysql://db_user:db_password@127.0.0.1:3306/db_name?serverVersion=5.7"

# Si utilisation de mariadb
DATABASE_URL="mysql://db_user:db_password@127.0.0.1:3306/db_name?serverVersion=MariaDB-10.4.18"

# Si utilisation de postgresql
DATABASE_URL="postgresql://db_user:db_password@127.0.0.1:5432/db_name?serverVersion=13&charset=utf8"
```

- Créer la base de données

En terminal, depuis la racine du projet
```
bin/console doctrine:database:create
```

- Appliquer les migrations

En terminal, depuis la racine du projet
```
bin/console doctrine:migrations:migrate
```

- Importer les données depuis l'API PokéAPI

En terminal, depuis la racine du projet
```
bin/console app:pokemon:pull
```

- Le site est maintenant accessible depuis le dossier `public`

`Pensez à mettre le navigateur en mode mobile via l'inspecteur d'éléments (F12)`

![Image indiquant comment passer en mode mobile](https://github.com/icekni/pokedex-api/blob/main/docs/VirtualBox_Le%20t%EF%BF%BDl%EF%BF%BDporteur%201_25_04_2021_14_44_07.png)
