import Link from "next/link";
import React, { useState } from "react";
function Content({ props, checkedTeachers, checkedBranches }) {
  const [sortedByTeachers, setSortedByTeachers] = useState(false);

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

  let rowCounter = 0;
  return (
    <>
      <>
        {props?.form?.tables?.length > 0 ? (
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-[90%] transition-all">
            {props?.form?.tables.map((table, index) => {
              if (sortedByTeachers) {
                table?.zastepstwa?.sort((a, b) =>
                  a.teacher.localeCompare(b.teacher)
                );
              } else {
                table?.zastepstwa?.sort((a, b) => a.lesson - b.lesson);
              }
              return (
                <table
                  className="w-full text-sm text-left text-gray-500 dark:text-gray-400 transition-all will-change-transform "
                  key={index}
                >
                  <caption className="p-5 transition-all text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
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
                                <span className="inline-flex items-center transition-all px-2 py-1 mr-2 text-sm font-medium text-blue-800 bg-blue-100 rounded dark:bg-blue-900 dark:text-blue-300">
                                  {item}
                                </span>
                              )
                          )}
                        </>
                      )}
                    </div>
                  </caption>
                  <thead className="text-xs transition-all text-[#ffffff] bg-[#2B161B] uppercase dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Lekcja
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <div
                          onClick={() => {
                            setSortedByTeachers((prevState) => !prevState);
                          }}
                          className="cursor-pointer flex items-center "
                        >
                          Nauczyciel
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-3 h-3 ml-1"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 320 512"
                          >
                            <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                          </svg>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Oddział
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Przedmiot
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Sala
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Zastępca
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Uwagi
                      </th>
                    </tr>
                  </thead>
                  <tbody className="transition-all">
                    {table?.zastepstwa?.map((zastepstwo, index) => {
                      if (
                        (filtersTeachers?.includes(zastepstwo?.teacher) &&
                          filtersBranches?.includes(zastepstwo?.branch)) ||
                        (filtersTeachers?.includes(zastepstwo?.teacher) &&
                          filtersBranches?.length == 0) ||
                        (filtersBranches?.includes(zastepstwo?.branch) &&
                          filtersTeachers?.length == 0) ||
                        (filtersBranches?.length == 0 &&
                          filtersTeachers?.length == 0)
                      ) {
                        rowCounter++;
                        return (
                          <tr
                            className={`${
                              rowCounter % 2 != 0
                                ? "bg-white dark:bg-gray-800"
                                : "bg-gray-50 dark:bg-gray-700"
                            }  border-b dark:border-gray-700 transition-all`}
                            key={index}
                          >
                            <td
                              className={`py-4 text-center h-full border-r last:border-none font-semibold dark:border-gray-600`}
                            >
                              {zastepstwo?.lesson}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap border-r last:border-none dark:border-gray-600 text-gray-500 dark:text-gray-400">
                              {zastepstwo?.teacher}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap border-r last:border-none dark:border-gray-600 text-gray-500 dark:text-gray-400">
                              {zastepstwo?.branch}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap border-r last:border-none dark:border-gray-600 text-gray-500 dark:text-gray-400">
                              {zastepstwo?.subject}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap border-r last:border-none dark:border-gray-600 text-gray-500 dark:text-gray-400">
                              {zastepstwo?.class}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap border-r last:border-none dark:border-gray-600 text-gray-500 dark:text-gray-400">
                              {zastepstwo?.case}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap border-r last:border-none dark:border-gray-600 text-gray-500 dark:text-gray-400">
                              {zastepstwo?.message}
                            </td>
                          </tr>
                        );
                      }
                    })}
                    <>
                      {rowCounter == 0 && (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 transition-all">
                          <td
                            scope="row"
                            colSpan={7}
                            className="px-6 py-4 font-semibold animate-pulse w-1 text-center text-gray-900 whitespace-nowrap dark:text-white transition-all"
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
                        ? "bg-white dark:bg-gray-800"
                        : "bg-gray-100 dark:bg-gray-700"
                    }`}
                  >
                    <tr className="font-semibold text-gray-900 dark:text-white">
                      <td
                        scope="row"
                        colSpan={7}
                        className="px-6 py-4 font-semibold w-1 text-left text-gray-900 whitespace-nowrap dark:text-white transition-all"
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
            <div className="bg-white border-b flex justify-center items-center dark:bg-gray-800 dark:border-gray-700 transition-all">
              <p className="px-6 py-4 font-semibold text-center text-gray-900 whitespace-nowrap dark:text-gray-100 transition-all">
                Nie znaleziono żadnych zastępstw
              </p>
            </div>
          </div>
        )}
      </>
    </>
  );
}
export default Content;
