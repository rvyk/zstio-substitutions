import Image from "next/image";
import Link from "next/link";
import React from "react";

function Jumbotron({ props }) {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
      <div className="flex justify-center items-center mb-4 md:mb-0 -ml-0 md:-ml-16">
        <Link href={"https://zstiojar.edu.pl"} className="hidden md:block">
          <Image
            alt="logo"
            width={120}
            height={120}
            className="w-auto h-auto"
            src={
              "https://zstiojar.edu.pl/wp-content/uploads/2023/03/cropped-zstio_godlo_logo-222x107.png"
            }
          />
        </Link>
        <h1 className="transition-all text-5xl font-extrabold tracking-tight leading-none text-[#2B161B] md:text-5xl lg:text-6xl dark:text-gray-100">
          Zastępstwa
        </h1>
      </div>
      <p className="md:my-4 mb-2 transition-all text-xl font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
        {props?.message ? props?.message : props?.form?.time}
      </p>
      {props?.form && (
        <>
          <button
            id="dropdownSearchBranch"
            data-dropdown-toggle="dropdownBranch"
            data-dropdown-placement="bottom"
            className="text-[#a91712] hover:text-white hover:border-transparent bg-transparent border-[1px] border-[#a91712] mx-2 sm:my-0 my-2 hover:bg-[#73110e] transition-all duration-200 focus:ring-4 focus:outline-none focus:ring-transparent font-medium text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-transparent dark:text-blue-600 hover:dark:text-white dark:border-blue-600 dark:hover:bg-blue-700"
            type="button"
          >
            Filtruj wg. oddziału{" "}
            <svg
              className="w-4 h-4 ml-2"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <button
            id="dropdownSearchTeacher"
            data-dropdown-toggle="dropdownTeacher"
            data-dropdown-placement="bottom"
            className="text-[#a91712] hover:text-white hover:border-transparent bg-transparent border-[1px] border-[#a91712] mx-2 sm:my-0 my-2 hover:bg-[#73110e] transition-all duration-200 focus:ring-4 focus:outline-none focus:ring-transparent font-medium text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-transparent dark:text-blue-600 hover:dark:text-white dark:border-blue-600 dark:hover:bg-blue-700"
            type="button"
          >
            Filtruj wg. nauczycieli{" "}
            <svg
              className="w-4 h-4 ml-2"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
        </>
      )}
    </div>
  );
}

export default Jumbotron;
