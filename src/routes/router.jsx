import PerfilEgreso from "../layouts/helpers/PerfilEgreso";
import PlanEstudio from "../layouts/helpers/PlanEstudio";
import Home from "../layouts/pages/Home";
import IntroduccionProgramacion from "../layouts/pages/primer-nivel/IntroduccioProgramacion";
import LogicaDeProgramacion from "../layouts/pages/primer-nivel/LogicaDeProgramacion";
import MetodologiasAgiles from "../layouts/pages/primer-nivel/MetodologiasAgiles";
import BasesDatos from "../layouts/pages/segundo-nivel/BasesDatos";
import MovilesUno from "../layouts/pages/segundo-nivel/MovilesUno";
import WebUno from "../layouts/pages/segundo-nivel/WebUno";
import MovilesDos from "../layouts/pages/tercer-nivel/MovilesDos";
import WebDos from "../layouts/pages/tercer-nivel/WebDos";

export let routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/perfil',
        element: <PerfilEgreso />
    },
    {
        path: '/plan',
        element: <PlanEstudio />
    },
    {
        path: '/logica-de-programacion',
        element: <LogicaDeProgramacion />
    },
    {
        path: '/metodologias-agiles',
        element: <MetodologiasAgiles />
    },
    {
        path: '/introduccion-programacion',
        element: <IntroduccionProgramacion />
    },
    {
        path: '/bases-datos',
        element: <BasesDatos />
    },
    {
        path: '/web-uno',
        element: <WebUno />
    },
    {
        path: '/moviles-uno',
        element: <MovilesUno />
    },
    {
        path: '/moviles-dos',
        element: <MovilesDos />
    },
    {
        path: '/web-dos',
        element: <WebDos />
    },
    {
        path: '/nuevas-tecnologias',
        element: <WebDos />
    },
]