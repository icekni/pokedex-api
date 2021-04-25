<?php

namespace App\Controller;

use App\Repository\PokemonRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ApiController extends AbstractController
{
    /**
     * @Route("/browse", name="api")
     */
    public function index(PokemonRepository $pokemonRepository): Response
    {
        return $this->json($pokemonRepository->findAll(), 200);
    }
}
