import React from "react";

function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800 transition-all">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between transition-all">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()}
          <a href="https://awfulworld.space/" className="hover:underline ml-2">
            awfulworld
          </a>
          <span className="ml-2">Made with ❤️ in Dziurosław.</span>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
