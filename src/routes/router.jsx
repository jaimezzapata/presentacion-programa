import PerfilEgreso from "../layouts/helpers/PerfilEgreso";
import PlanEstudio from "../layouts/helpers/PlanEstudio";
import Home from "../layouts/pages/Home";
import LogicaDeProgramacion from "../layouts/pages/suroeste/primer-nivel/LogicaDeProgramacion";
import LogicaDeProgramacionMedellin from "../layouts/pages/medellin/primer-nivel/LogicaDeProgramacionMedellin";
import MetodologiasAgiles from "../layouts/pages/medellin/segundo-nivel/MetodologiasAgilesMedellin";
import IntroduccionProgramacion from "../layouts/pages/suroeste/primer-nivel/IntroduccioProgramacion";
import IntroduccioProgramacionMedellin from "../layouts/pages/medellin/primer-nivel/IntroduccioProgramacionMedellin";
import BasesDatos from "../layouts/pages/suroeste/primer-nivel/BasesDatos";
import BasesDatosMedellin from "../layouts/pages/medellin/primer-nivel/BasesDatosMedellin";
import WebUno from "../layouts/pages/suroeste/segundo-nivel/WebUno";
import FrontEndUno from "../layouts/pages/medellin/segundo-nivel/FrontEndUno";
import MovilesUno from "../layouts/pages/suroeste/segundo-nivel/MovilesUno";
import BackEndUno from "../layouts/pages/medellin/segundo-nivel/BackEndUno";
import MovilesDos from "../layouts/pages/suroeste/tercer-nivel/MovilesDos";
import BackEndDos from "../layouts/pages/medellin/tercer-nivel/BackEndDos";
import WebDos from "../layouts/pages/suroeste/tercer-nivel/WebDos";
import FrontEndDos from "../layouts/pages/medellin/tercer-nivel/FrontEndDos";
import NuevasTecnologias from "../layouts/pages/suroeste/tercer-nivel/NuevasTecnologias";
import NuevasTecnologiasMedellin from "../layouts/pages/medellin/tercer-nivel/NuevasTecnologiasMedellin";
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
    path: "/logica-de-programacion-medellin",
    element: <LogicaDeProgramacionMedellin />,
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
    path: "/introduccion-programacion-medellin",
    element: <IntroduccioProgramacionMedellin />,
  },
  {
    path: "/bases-datos",
    element: <BasesDatos />,
  },
  {
    path: "/bases-datos-medellin",
    element: <BasesDatosMedellin />,
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
    path: "/front-uno",
    element: <FrontEndUno />,
  },
  {
    path: "/moviles-uno",
    element: <MovilesUno />,
  },
  {
    path: "/back-uno",
    element: <BackEndUno />,
  },
  {
    path: "/moviles-dos",
    element: <MovilesDos />,
  },
  {
    path: "/back-dos",
    element: <BackEndDos />,
  },
  {
    path: "/web-dos",
    element: <WebDos />,
  },
  {
    path: "/front-dos",
    element: <FrontEndDos />,
  },
  {
    path: "/nuevas-tecnologias",
    element: <NuevasTecnologias />,
  },
  {
    path: "/nuevas-tecnologias-medellin",
    element: <NuevasTecnologiasMedellin />,
  },
];
