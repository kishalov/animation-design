import './globals.css';

export const viewport = {
  themeColor: '#171512'
};

export const metadata = {
  title: 'Animation Studio — моушн-дизайн, который останавливает скролл',
  description: 'Animation Studio создаёт моушн-дизайн, объясняющие ролики, рекламу для соцсетей, брендовые заставки и продуктовую анимацию для бизнеса.',
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    title: 'Animation Studio — моушн-дизайн, который останавливает скролл',
    description: 'Анимация, которая останавливает скролл, для владельцев бизнеса, которым надоело, что их пролистывают.',
    images: [{ url: '/og-image.png', type: 'image/png' }],
    locale: 'ru_RU'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Animation Studio — моушн-дизайн, который останавливает скролл',
    description: 'Анимация, которая останавливает скролл, для владельцев бизнеса, которым надоело, что их пролистывают.',
    images: ['/og-image.png']
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' }
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
