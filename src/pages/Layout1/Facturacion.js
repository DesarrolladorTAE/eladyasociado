// src/pages/Servicio/Servicio.jsx
import React, { Suspense } from "react";

// Aquí puedes lazy-load si quieres, o importar normal
const Fac1 = React.lazy(() => import("../../component/Facturacion/Factura1"));
const Fac2 = React.lazy(() => import("../../component/Facturacion/Laptop"));
const Iconos = React.lazy(() => import("../../component/ConEle/Iconos"));
const Nube = React.lazy(() => import("../../component/ConEle/Nube"));

// Agrega los que necesites...

const Servicio = () => {
    return (
        <Suspense fallback={<div>Cargando...</div>}>
            <Fac1 />
            <Fac2 />
            {/* <Iconos /> */}
            {/* <Nube /> */}
            {/* Agrega más componentes aquí */}
        </Suspense>
    );
};

export default Servicio;
