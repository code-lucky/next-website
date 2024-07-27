import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Providers } from './providers';
import '@/globals.css';

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body>
        <header>
          <Header locale={locale}/>
        </header>
        <Providers>
          <div className='max-w-screen-xl w-full relative mx-auto px-6' style={{ minHeight: 'calc(100vh - 56px - 56px - 20px)' }}>
            {children}
          </div>
        </Providers>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}