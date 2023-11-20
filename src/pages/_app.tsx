import "@/styles/globals.css";
import React from "react";
import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
