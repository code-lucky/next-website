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
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <header>
          <Header />
        </header>
        <Providers>
          <div className='max-w-screen-xl w-full relative mx-auto px-6 min-h-screen'>
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