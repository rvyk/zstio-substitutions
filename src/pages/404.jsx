import React, { useEffect, useState } from "react";
import ThemeChanger from "./components/ThemeChanger";
import Link from "next/link";
function NotFound() {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);
  return (
    <>
      <ThemeChanger />
      <section class="bg-white dark:bg-gray-900 h-screen flex justify-center items-center flex-col transition-all">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 transition-all">
          <div class="mx-auto max-w-screen-sm text-center">
            <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
              404
            </h1>
            <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              Czegoś brakuje...
            </p>
            <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400 transition-all">
              Strona{" "}
              <span class="bg-gray-100 text-gray-800 transition-all text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                {currentPath}
              </span>{" "}
              nie istnieje, czy na pewno wpisałeś dobry adres?
            </p>
            <Link
              href={"/"}
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5 mr-2 -ml-1"
                fill="currentColor"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
              </svg>
              Wróć na stronę główną
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFound;
