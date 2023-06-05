import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import "~/styles/globals.css";

import { Roboto_Mono, Rammetto_One } from 'next/font/google';
 
const rammetto = Rammetto_One({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rammetto',
  weight: "400"
});
 
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <main className={`${rammetto.variable} ${roboto_mono.variable}`}>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
};

export default MyApp;
