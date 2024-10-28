import type { Metadata } from "next";
import '@fontsource-variable/manrope';
import "./globals.css";


export const metadata: Metadata = {
  title: 'Coloreto - Herramienta de Contraste de Color',
  description:
    'Coloreto es una herramienta sencilla y profesional que te ayuda a verificar el contraste entre colores para asegurar la accesibilidad en tus diseños.',
  keywords: ['Coloreto', 'contraste de color', 'accesibilidad', 'herramienta de diseño', 'WCAG'],
  authors: [{ name: 'Qosmo', url: 'https://instagram.com/qosmo__' }],
  creator: 'Qosmo',
  openGraph: {
    title: 'Coloreto - Herramienta de Contraste de Color Accesible',
    description:
      'Verifica fácilmente el contraste entre colores y asegura la accesibilidad en tus diseños con Coloreto.',
    url: 'https://coloreto.com',
    siteName: 'Coloreto',
    images: [
      {
        url: 'https://coloreto.com/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Coloreto - Herramienta de Contraste de Color Accesible',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coloreto - Herramienta de Contraste de Color Accesible',
    description:
      'Verifica fácilmente el contraste entre colores y asegura la accesibilidad en tus diseños con Coloreto.',
    images: ['https://coloreto.com/opengraph-image.png'],
    creator: '@qosmo_',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
  verification: {
    google: 'FUCVCDcPf9zB_eZvT2ofKqgwOLGau0oFVQmISx4DVoQ',
  },
  // <meta name="google-site-verification" content="FUCVCDcPf9zB_eZvT2ofKqgwOLGau0oFVQmISx4DVoQ" />
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
