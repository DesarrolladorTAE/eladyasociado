// src/pages/Servicio/Servicio.jsx
import React, { Suspense } from "react";

// Aquí puedes lazy-load si quieres, o importar normal
const Contables = React.lazy(() => import("../../component/Servicio/Contables"));
const Tics = React.lazy(() => import("../../component/Servicio/Tics"));
const Ases = React.lazy(() => import("../../component/Servicio/Asesoria"));
const Form = React.lazy(() => import("../../component/Servicio/Formulario"));

// Agrega los que necesites...

const Servicio = () => {
    return (
        <Suspense fallback={<div>Cargando...</div>}>
            <Contables />
            <Tics />
            <Ases />
            <Form />
            {/* Agrega más componentes aquí */}
        </Suspense>
    );
};

export default Servicio;
