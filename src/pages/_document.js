import { Html, Head, Main, NextScript } from "next/document";
import ThemeChanger from "./components/ThemeChanger";
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.4/flowbite.min.js"></script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
