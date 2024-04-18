import PerfilEgreso from "../layouts/helpers/PerfilEgreso";
import PlanEstudio from "../layouts/helpers/PlanEstudio";
import Home from "../layouts/pages/Home";
import IntroduccionProgramacion from "../layouts/pages/primer-nivel/IntroduccioProgramacion";
import LogicaDeProgramacion from "../layouts/pages/primer-nivel/LogicaDeProgramacion";
import MetodologiasAgiles from "../layouts/pages/primer-nivel/MetodologiasAgiles";

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
]