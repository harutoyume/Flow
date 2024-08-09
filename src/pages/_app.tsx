import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from 'next/head';
import { ThemeProvider } from "@/components/theme-provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=2.0, user-scalable=yes"/>
        </Head>
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
        >
          <div className="inter-font">
            <Component {...pageProps} />
          </div>
        </ThemeProvider>
      </>
  );
}
