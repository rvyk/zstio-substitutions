import React from "react";
import Link from "next/link";
function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800 transition-all">
      <div className="w-full mx-auto max-w-screen-xl px-4 pt-4 md:flex md:items-center md:justify-between transition-all">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()}
          <a href="https://awfulworld.space/" className="hover:underline ml-2">
            awfulworld
          </a>
          <span className="ml-2">Made with ❤️ in Dziurosław.</span>
        </span>
      </div>
      <div className="w-full  mx-auto max-w-screen-xl px-4 py-2 flex justify-center items-center transition-all">
        <Link
          target="_blank"
          href={"https://github.com/rvyk/zstio-zastepstwa"}
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            fill="currentColor"
            class="w-4 h-4 "
          >
            <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
          </svg>
          <span class="sr-only">Source code of website</span>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
