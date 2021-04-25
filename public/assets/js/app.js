const app = {
  init: function() {
    // Selection de toutes les header de pokemon
    const pokemonCardsList = document.querySelectorAll('.pokemon-header');

    // Ajout d'un ecouteur d'evenement sur chacun pour detecter le clic dessus
    pokemonCardsList.forEach((card) => card.addEventListener('click', app.handleClick));

    // Chargement de tous les pokemons depuis l'API
    fetch("browse")
      .then((response) => response.json())
      .then(app.loadPokemons)
    ;
  },

  handleClick: function(e) {
    const cardContent = e.currentTarget.nextElementSibling;

    // Repliage de la card
    if (cardContent.style.maxHeight !== "0px") {
      cardContent.style.maxHeight = "0";
    }
    else {
      cardContent.style.maxHeight = "500px";
    };

    // Changement de sens de la fleche de repliage dans le header
    e.currentTarget.classList.toggle('pokemon-header--expanded');
  },

  loadPokemons: function(response) {
    // Stockage de l'element conteneur
    const mainElement = document.querySelector('main');

    // Stockage de la template
    const template = document.querySelector('template');

    // Pour chaque pokemon, on va créer une card
    for (let pokemon of response) {
      var clone = document.importNode(template.content, true);

      // Modification du nom du pokemon dans le titre
      clone.querySelector(".pokemon-header").textContent = pokemon.name;
      // Modification de l'image
      clone.querySelector(".pokemon-picture img").src = pokemon.picture;
      // Modification de la description
      clone.querySelector(".pokemon-description").textContent = pokemon.description;

      // Ajout d'un ecouteur evenement sur le clic du header
      clone.querySelector(".pokemon-header").addEventListener('click', app.handleClick);

      // Insertion dans le DOM
      mainElement.appendChild(clone);
    }
  }
};

document.addEventListener('DOMContentLoaded', app.init);