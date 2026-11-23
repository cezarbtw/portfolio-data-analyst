import React from 'react';

/**
 * Pack de ícones Pixel Art 24x24 (Inspirado no pack MIT Pixelarticons)
 * Estilo autêntico com blocos geométricos e shapeRendering="crispEdges"
 */
export default function PixelIcon({ name, size = 18, className = '' }) {
  const renderPath = () => {
    switch (name) {
      case 'floppy':
      case 'disk':
        return (
          <>
            <path d="M4 2h14l4 4v16H4V2zm2 2v6h10V4H6zm0 16h12v-8H6v8zm2-14h2v4H8V4z" />
          </>
        );

      case 'timeline':
      case 'clock':
        return (
          <>
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 2a8 8 0 1 1-8 8 8 8 0 0 1 8-8zm-1 3h2v6h5v2h-7V7z" />
          </>
        );

      case 'folder':
        return (
          <>
            <path d="M2 4h8l2 2h10v14H2V4zm2 4v10h16V8H4z" />
          </>
        );

      case 'briefcase':
        return (
          <>
            <path d="M8 2h8v4h6v16H2V6h6V2zm2 2v2h4V4h-4zM4 8v4h16V8H4zm16 6H4v6h16v-6z" />
          </>
        );

      case 'chart':
      case 'analytics':
        return (
          <>
            <path d="M2 2h2v18h18v2H2V2zm6 12H6v4h2v-4zm6-6h-2v10h2V8zm6-4h-2v14h2V4z" />
          </>
        );

      case 'mail':
        return (
          <>
            <path d="M2 4h20v16H2V4zm2 2v2l8 5 8-5V6H4zm16 4.38-8 5-8-5V18h16v-7.62z" />
          </>
        );

      case 'terminal':
        return (
          <>
            <path d="M2 3h20v18H2V3zm2 2v14h16V5H4zm3 3h2v2H7V8zm2 2h2v2H9v-2zm-2 2h2v2H7v-2zm6 2h6v2h-6v-2z" />
          </>
        );

      case 'sun':
        return (
          <>
            <path d="M11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm0-12.728l2.121-2.121 1.414 1.414-2.121 2.121-1.414-1.414zM4.929 20.485l-1.414-1.414 2.121-2.121 1.414 1.414-2.121 2.121zM1 11h3v2H1v-2zm19 0h3v2h-3v-2zm-8-5a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 2a4 4 0 1 1-4 4 4 4 0 0 1 4-4z" />
          </>
        );

      case 'moon':
        return (
          <>
            <path d="M12 2h2v2h2v2h2v2h2v4h-2v2h-2v2h-2v2h-2v2h-4v-2H8v-2H6v-2H4v-2H2v-4h2V8h2V6h2V4h2V2h2zm-2 4H8v2H6v2H4v4h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h-2v-2h-2V8h-2V6h-2V4h-2v2z" />
          </>
        );

      case 'github':
        return (
          <>
            <path d="M9 2h6v2H9V2zm-3 2h3v2H6V4zm12 0h-3v2h3V4zM4 6h2v4H4V6zm16 0h-2v4h2V6zm-3 10h-2v3h-1v-2h-4v2h-1v-3H7v-5h1V9h1V8h6v1h1v1h1v5h-1zm-6-5H9v2h2v-2zm4 0h-2v2h2v-2z" />
          </>
        );

      case 'linkedin':
        return (
          <>
            <path d="M2 2h20v20H2V2zm4 7h3v9H6V9zm0-4h3v3H6V5zm5 4h3v1.5h.05c.42-.8 1.45-1.65 3-1.65 3.2 0 3.8 2.1 3.8 4.85V18h-3v-4.15c0-.99-.02-2.27-1.38-2.27-1.38 0-1.6 1.08-1.6 2.2V18h-3.07V9z" />
          </>
        );

      case 'external':
        return (
          <>
            <path d="M5 3h16v16h-2V6.414l-12.293 12.293-1.414-1.414L17.586 5H5V3z" />
          </>
        );

      case 'menu':
        return (
          <>
            <path d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z" />
          </>
        );

      case 'close':
        return (
          <>
            <path d="M5 5h2v2h2v2h2v2h2V9h2V7h2V5h2v2h-2v2h-2v2h-2v2h2v2h2v2h2v2h-2v-2h-2v-2h-2v-2h-2v2H9v2H7v2H5v-2h2v-2h2v-2h2v-2H9V9H7V7H5V5z" />
          </>
        );

      case 'copy':
        return (
          <>
            <path d="M4 2h11v2H6v11H4V2zm4 4h12v16H8V6zm2 2v12h8V8h-8z" />
          </>
        );

      case 'check':
        return (
          <>
            <path d="M19 5l-9 9-4-4-2 2 6 6 11-11-2-2z" />
          </>
        );

      case 'code':
        return (
          <>
            <path d="M8 5l-6 7 6 7 2-2-4.286-5L10 7 8 5zm8 0l-2 2 4.286 5L14 17l2 2 6-7-6-7z" />
          </>
        );

      case 'database':
        return (
          <>
            <path d="M4 3h16v4H4V3zm0 7h16v4H4v-4zm0 7h16v4H4v-4zm2-12v2h12V5H6zm0 7v2h12v-2H6zm0 7v2h12v-2H6z" />
          </>
        );

      case 'whatsapp':
        return (
          <>
            <path d="M12 2a10 10 0 0 0-8.66 15L2 22l5.17-1.34A10 10 0 1 0 12 2zm0 2a8 8 0 0 1 6.93 12l-.4.69.83 3.08-3.15-.82-.67.39A8 8 0 1 1 12 4zm-3 4a1 1 0 0 0-1 1c0 2.5 2 5.5 4.5 7a4.5 4.5 0 0 0 2.5.5 1 1 0 0 0 1-1v-1.5l-2-1-.75.75c-.5-.25-1.5-1.25-1.75-1.75l.75-.75-1-2H9z" />
          </>
        );

      default:
        return <rect x="4" y="4" width="16" height="16" />;
    }
  };

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={`inline-block shrink-0 fill-current ${className}`}
      style={{ shapeRendering: 'crispEdges' }}
      aria-hidden="true"
    >
      {renderPath()}
    </svg>
  );
}
