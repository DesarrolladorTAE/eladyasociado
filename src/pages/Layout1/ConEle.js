// src/pages/Servicio/Servicio.jsx
import React, { Suspense } from "react";

// Aquí puedes lazy-load si quieres, o importar normal
const Conta = React.lazy(() => import("../../component/ConEle/Conta"));
const Conta2 = React.lazy(() => import("../../component/ConEle/Con2"));
const Iconos = React.lazy(() => import("../../component/ConEle/Iconos"));
const Nube = React.lazy(() => import("../../component/ConEle/Nube"));

// Agrega los que necesites...

const Servicio = () => {
    return (
        <Suspense fallback={<div>Cargando...</div>}>
            <Conta />
            <Conta2 />
            <Iconos />
            <Nube />
            {/* Agrega más componentes aquí */}
        </Suspense>
    );
};

export default Servicio;
