<?php

namespace App\Command;

use App\Entity\Pokemon;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class GetPokemonFromApi extends Command
{
    protected static $defaultName = 'app:pokemon:pull';

    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;

        parent::__construct();
    }

    /**
     * Configuration de la commande
     */
    protected function configure()
    {
        $this->setDescription('Call PokéAPI to fill our database');
    }

    /**
     * Que fait la commande
     */
    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $io->title('Importation des pokémons depuis PokéApi');

        $pokemonsList = $this->getAllFromApi();

        foreach ($pokemonsList as $pokemonData) {
            $io->text('Importation du pokémon ' . $pokemonData->name);

            // Récupération des détails du pokemon en cours
            $responseContent = file_get_contents($pokemonData->url);
            $details = json_decode($responseContent);

            // Création d'un nouveau pokemon
            $pokemon = (new Pokemon())
                ->setName($pokemonData->name)
                ->setPicture($details->sprites->other->dream_world->front_default)
                ->setDescription("Description de " . $pokemonData->name)
            ;

            // Persist du nouveau pokemon
            $this->entityManager->persist($pokemon);
        }

        $this->entityManager->flush();

        $io->success('Tous les pokémons ont été ajoutés à la base de données');

        return 0;
    }

    /**
     * Recupère la liste complète de tous les pokemons
     */
    public function getAllFromApi()
    {
        $url = "https://pokeapi.co/api/v2/pokemon?limit=101";

        // Appel à l'API pour recuperer la liste complète des pokemons
        $responseContent = file_get_contents($url);
        // Formattage dans un array
        $pokemonsList = json_decode($responseContent);

        return $pokemonsList->results;
    }
}
