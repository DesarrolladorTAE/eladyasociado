import React, { Suspense } from "react";

// Secciones de la página principal
const Inicio = React.lazy(() => import("../../component/Principal/Inicio"));
const Cesar = React.lazy(() => import("../../component/Principal/Cesar"));
const Opinion = React.lazy(() => import("../../component/Principal/Opinion"));
const Preguntas = React.lazy(() => import("../../component/Principal/Preguntas"));
const IniFooter = React.lazy(() => import("../../component/Footer/InicioFooter"));

const InicioPage = () => {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Inicio />
      <Cesar />
      <Opinion />
      <Preguntas />
    </Suspense>
  );
};

export default InicioPage;
