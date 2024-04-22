import PerfilEgreso from "../layouts/helpers/PerfilEgreso";
import PlanEstudio from "../layouts/helpers/PlanEstudio";
import Home from "../layouts/pages/Home";
import LogicaDeProgramacion from "../layouts/pages/suroeste/primer-nivel/LogicaDeProgramacion";
import MetodologiasAgiles from "../layouts/pages/medellin/MetodologiasAgiles";
import IntroduccionProgramacion from "../layouts/pages/suroeste/primer-nivel/IntroduccioProgramacion";
import BasesDatos from "../layouts/pages/suroeste/primer-nivel/BasesDatos";
import WebUno from "../layouts/pages/suroeste/segundo-nivel/WebUno";
import MovilesUno from "../layouts/pages/suroeste/segundo-nivel/MovilesUno";
import MovilesDos from "../layouts/pages/suroeste/tercer-nivel/MovilesDos";
import WebDos from "../layouts/pages/suroeste/tercer-nivel/WebDos";
import NuevasTecnologias from "../layouts/pages/suroeste/tercer-nivel/NuevasTecnologias";
import AnalisisDiseno from "../layouts/pages/suroeste/segundo-nivel/AnalisisDiseno";
import PlanEstudioSuroeste from "../layouts/helpers/PlanEstudioSuroeste";
import PlanEstudioMedellin from "../layouts/helpers/PlanEstudioMedellin";

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
    path: "/plan-suroeste",
    element: <PlanEstudioSuroeste />,
  },
  {
    path: "/plan-medellin",
    element: <PlanEstudioMedellin />,
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
    path: "/analisis-diseño",
    element: <AnalisisDiseno />,
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
