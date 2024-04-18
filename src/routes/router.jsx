import PerfilEgreso from "../layouts/helpers/PerfilEgreso";
import PlanEstudio from "../layouts/helpers/PlanEstudio";
import Home from "../layouts/pages/Home";

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
]