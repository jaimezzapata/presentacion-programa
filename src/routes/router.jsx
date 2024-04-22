import PerfilEgreso from "../layouts/helpers/PerfilEgreso";
import PlanEstudio from "../layouts/helpers/PlanEstudio";
import Home from "../layouts/pages/Home";
import LogicaDeProgramacion from "../layouts/pages/suroeste/primer-nivel/LogicaDeProgramacion";
import MetodologiasAgiles from "../layouts/pages/suroeste/primer-nivel/MetodologiasAgiles";
import IntroduccionProgramacion from "../layouts/pages/suroeste/primer-nivel/IntroduccioProgramacion";
import BasesDatos from "../layouts/pages/suroeste/segundo-nivel/BasesDatos";
import WebUno from "../layouts/pages/suroeste/segundo-nivel/WebUno";
import MovilesUno from "../layouts/pages/suroeste/segundo-nivel/MovilesUno";
import MovilesDos from "../layouts/pages/suroeste/tercer-nivel/MovilesDos";
import WebDos from "../layouts/pages/suroeste/tercer-nivel/WebDos";
import NuevasTecnologias from "../layouts/pages/suroeste/tercer-nivel/NuevasTecnologias";

export let routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/perfil",
    element: <PerfilEgreso />,
  },
  {
    path: "/plan",
    element: <PlanEstudio />,
  },
  {
    path: "/logica-de-programacion",
    element: <LogicaDeProgramacion />,
  },
  {
    path: "/metodologias-agiles",
    element: <MetodologiasAgiles />,
  },
  {
    path: "/introduccion-programacion",
    element: <IntroduccionProgramacion />,
  },
  {
    path: "/bases-datos",
    element: <BasesDatos />,
  },
  {
    path: "/web-uno",
    element: <WebUno />,
  },
  {
    path: "/moviles-uno",
    element: <MovilesUno />,
  },
  {
    path: "/moviles-dos",
    element: <MovilesDos />,
  },
  {
    path: "/web-dos",
    element: <WebDos />,
  },
  {
    path: "/nuevas-tecnologias",
    element: <NuevasTecnologias />,
  },
];
