import React, { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return show ? (
    <button
      aria-label="Volver arriba"
      onClick={scrollToTop}
      style={{
        position: "fixed",
        right: 26,
        bottom: 32,
        zIndex: 1000,
        background: "#1f61eb",
        color: "#fff",
        border: "none",
        borderRadius: "50%",
        width: 48,
        height: 48,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 16px rgba(0,0,0,.15)",
        cursor: "pointer",
        transition: "opacity 0.2s"
      }}
    >
      {/* Simple flecha SVG hacia arriba */}
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>
  ) : null;
};

export default ScrollToTopButton;
