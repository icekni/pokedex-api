const app = {
  init: function() {
    console.log('init chargée');

    // Selection de toutes les header de pokemon
    const pokemonCardsList = document.querySelectorAll('.pokemon-header');

    // Ajout d'un ecouteur d'evenement sur chacun pour detecter le clic dessus
    pokemonCardsList.forEach((card) => card.addEventListener('click', app.handleClick));
  },

  handleClick: function(e) {
    const cardContent = e.currentTarget.nextElementSibling;
    console.log(cardContent.style.maxHeight);

    // Repliage de la card
    if (cardContent.style.maxHeight !== "0px") {
      cardContent.style.maxHeight = "0";
    }
    else {
      cardContent.style.maxHeight = "500px";
    };

    // Changement de sens de la fleche de repliage dans le header
    e.currentTarget.classList.toggle('pokemon-header--expanded');
  }
};

document.addEventListener('DOMContentLoaded', app.init);