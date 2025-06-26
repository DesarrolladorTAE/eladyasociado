import React from "react";

const whatsappNumber = "5212216919071"; // Usa tu número en formato internacional
const whatsappMessage = encodeURIComponent("¡Hola! Me interesa saber más sobre Tecnologías Administrativas ELAD.");

const WhatsAppFloatLeft = () => (
  <a
    href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar por WhatsApp"
    style={{
      position: "fixed",
      left: 24,
      bottom: 24,
      zIndex: 3000,
      width: 60,
      height: 60,
      backgroundColor: "#25D366",
      borderRadius: "50%",
      boxShadow: "0 4px 18px rgba(0,0,0,0.16)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "box-shadow 0.2s",
      cursor: "pointer",
    }}
  >
    {/* SVG de WhatsApp */}
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d="M16.02 3C9.39 3 3.97 8.43 3.97 15.05c0 2.51.68 4.9 1.96 7.02L3 29l7.19-2.03c2 .93 4.14 1.42 6.37 1.42 6.63 0 12.05-5.42 12.05-12.04S22.65 3 16.02 3zm0 21.83c-1.98 0-3.92-.5-5.62-1.45l-.4-.22-4.29 1.21 1.15-4.18-.26-.43c-1.19-1.98-1.82-4.27-1.82-6.63C5.76 9.41 10.19 5 16.02 5c5.83 0 10.26 4.41 10.26 10.23 0 5.82-4.43 10.23-10.26 10.23zm5.54-7.56c-.3-.15-1.8-.89-2.08-.98-.28-.09-.48-.15-.68.15s-.78.98-.96 1.18c-.17.19-.35.21-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.53.15-.17.2-.29.3-.49.1-.19.05-.36-.03-.51-.08-.15-.68-1.65-.93-2.26-.25-.6-.5-.51-.68-.52-.17-.01-.36-.02-.56-.02s-.51.07-.77.36c-.26.29-1.01.98-1.01 2.4s1.04 2.78 1.19 2.97c.15.19 2.06 3.16 5.18 4.3.72.25 1.28.39 1.72.5.72.18 1.37.16 1.89.1.58-.07 1.8-.74 2.06-1.46.26-.72.26-1.33.18-1.46-.08-.13-.27-.2-.56-.34z" />
      </g>
    </svg>
  </a>
);

export default WhatsAppFloatLeft;
