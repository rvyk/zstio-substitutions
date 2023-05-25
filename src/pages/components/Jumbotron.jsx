import React from "react";

function Jumbotron({ props }) {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
      <h1 className="mb-4 transition-all text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Zastępstwa ZSTIO
      </h1>
      <p className="mb-8 transition-all text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
        {props?.message ? props?.message : props?.form?.time}
      </p>
      {props?.form && (
        <>
          <button
            id="dropdownSearchBranch"
            data-dropdown-toggle="dropdownBranch"
            data-dropdown-placement="bottom"
            className="text-white bg-blue-700 mx-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
            className="text-white bg-blue-700 mx-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
