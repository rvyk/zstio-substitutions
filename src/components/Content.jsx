import Link from "next/link";
import React, { useState } from "react";
function Content({ props, checkedTeachers, checkedBranches }) {
  let filtersTeachers, filtersBranches;
  if (checkedTeachers) {
    filtersTeachers = Object.keys(checkedTeachers).filter(
      (key) => checkedTeachers[key]
    );
  }
  if (checkedBranches) {
    filtersBranches = Object.keys(checkedBranches).filter(
      (key) => checkedBranches[key]
    );
  }

  const items = [
    "Lekcja",
    "Nauczyciel",
    "Oddział",
    "Przedmiot",
    "Sala",
    "Zastępca",
    "Uwagi",
  ];

  let rowCounter = 0;
  return (
    <>
      {props?.form?.tables?.length > 0 ? (
        <div className="relative overflow-x-auto shadow-md sm:rounded-xl w-[90%] transition-all duration-100">
          {props?.form?.tables.map((table, index) => {
            return (
              <table
                className="w-full text-sm text-left transition-all duration-200 text-gray-500 dark:text-gray-300"
                key={index}
              >
                <caption className="p-5 transition-all text-lg font-semibold text-left text-gray-900 bg-white dark:text-gray-300 dark:bg-[#202020]">
                  {table.time}
                  <div className="flex items-center flex-wrap gap-2">
                    {(filtersTeachers?.length > 0 ||
                      filtersBranches?.length > 0) && (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          fill="currentColor"
                          className="w-4 h-4"
                        >
                          <path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" />
                        </svg>
                        <p className="mr-2">Filtry: </p>
                        {Object.entries({
                          ...checkedTeachers,
                          ...checkedBranches,
                        }).map(
                          ([item, checked]) =>
                            checked && (
                              <span className="inline-flex items-center transition-all px-2 py-1 mr-2 text-sm font-medium text-blue-800 bg-blue-100 rounded dark:bg-red-100 dark:text-red-800 ">
                                {item}
                              </span>
                            )
                        )}
                      </>
                    )}
                  </div>
                </caption>
                <thead className="text-xs transition-all duration-200 text-[#ffffff] bg-[#2B161B] uppercase dark:bg-[#151515] dark:text-gray-300">
                  <tr>
                    {items.map((item) => {
                      return (
                        <th scope="col" key={item} className="px-6 py-3">
                          {item}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody className="transition-all">
                  {table?.zastepstwa?.map((zastepstwo, index) => {
                    if (
                      (filtersTeachers?.includes(zastepstwo?.teacher) &&
                        filtersBranches?.includes(zastepstwo?.branch)) ||
                      (filtersTeachers?.includes(zastepstwo?.teacher) &&
                        filtersBranches?.length === 0) ||
                      (filtersBranches?.includes(zastepstwo?.branch) &&
                        filtersTeachers?.length === 0) ||
                      (filtersBranches?.length === 0 &&
                        filtersTeachers?.length === 0)
                    ) {
                      rowCounter++;
                      return (
                        <tr
                          className={`text-gray-600 dark:text-gray-300 border-b ${
                            rowCounter % 2 === 0
                              ? "bg-white dark:bg-[#191919]"
                              : "bg-gray-50 dark:bg-[#202020]"
                          } dark:border-[#181818] `}
                          key={index}
                        >
                          <td
                            className={`py-4 px-4 text-center h-full border-r last:border-none font-semibold dark:border-[#171717]`}
                            style={{ whiteSpace: "nowrap" }}
                          >
                            {zastepstwo?.lesson}
                          </td>

                          {[
                            "teacher",
                            "branch",
                            "subject",
                            "class",
                            "case",
                            "message",
                          ].map((field) => (
                            <td
                              key={field}
                              className="px-6 py-4 whitespace-nowrap border-r last:border-none dark:border-[#171717]"
                            >
                              {zastepstwo?.[field]}
                            </td>
                          ))}
                        </tr>
                      );
                    }
                  })}

                  <>
                    {rowCounter == 0 && (
                      <tr className="bg-white border-b dark:bg-[#202020] dark:border-[#181818] transition-all">
                        <td
                          scope="row"
                          colSpan={7}
                          className="px-6 py-4 font-semibold text-center text-gray-900 whitespace-nowrap dark:text-gray-300 transition-all"
                        >
                          Nie znaleziono danych do podanych filtrów
                        </td>
                      </tr>
                    )}
                  </>
                </tbody>
                <tfoot
                  className={`bg-[#2B161B] ${
                    rowCounter % 2 == 0
                      ? "bg-white dark:bg-[#191919]"
                      : "bg-gray-50 dark:bg-[#202020]"
                  }`}
                >
                  <tr className="font-semibold text-gray-900 dark:text-gray-300">
                    <td
                      scope="row"
                      colSpan={7}
                      className="px-6 py-4 font-semibold w-1 text-left text-gray-900 whitespace-nowrap dark:text-gray-300 transition-all"
                    >
                      <Link
                        href={
                          "http://kristofc.webd.pro/plan/InformacjeOZastepstwach.html"
                        }
                      >
                        Źródło danych
                      </Link>
                    </td>
                  </tr>
                </tfoot>
              </table>
            );
          })}
        </div>
      ) : (
        <div className="relative overflow-x-auto mb-10 shadow-md sm:rounded-lg w-[90%] transition-all">
          <div className="bg-white border-b flex justify-center items-center dark:bg-[#202020] dark:border-[#171717] transition-all">
            <p className="px-6 py-4 font-semibold text-center text-gray-900 whitespace-nowrap dark:text-gray-300 transition-all">
              Nie znaleziono żadnych zastępstw
            </p>
          </div>
        </div>
      )}
    </>
  );
}
export default Content;
