import React from "react";

function TableSkeleton() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-[90%] transition-all">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 transition-all will-change-transform ">
        <caption className="p-5 transition-all text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          <div role="status" className="max-w-sm animate-pulse">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
          </div>
        </caption>
        <thead className="text-xs transition-all text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Lekcja
            </th>
            <th scope="col" className="px-6 py-3">
              Nauczyciel
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
          {[...Array(3)].map((_, index) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 transition-all"
              key={index}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium w-1 text-gray-900 whitespace-nowrap dark:text-white transition-all"
              >
                <div role="status" className="max-w-sm animate-pulse">
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                </div>
              </th>
              <td className="px-6 py-4 break-words w-24">
                <div role="status" className="max-w-sm animate-pulse">
                  <div
                    className={`h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5`}
                  ></div>
                </div>
              </td>
              <td className="px-6 py-4 break-words w-24">
                <div role="status" className="max-w-sm animate-pulse">
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[80px] mb-2.5"></div>
                </div>
              </td>
              <td className="px-6 py-4 break-words w-24">
                <div role="status" className="max-w-sm animate-pulse">
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[400px] mb-2.5"></div>
                </div>
              </td>
              <td className="px-6 py-4 break-words w-24">
                <div role="status" className="max-w-sm animate-pulse">
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100px] mb-2.5"></div>
                </div>
              </td>
              <td className="px-6 py-4 break-words w-24">
                <div role="status" className="max-w-sm animate-pulse">
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                </div>
              </td>
              <td className="px-6 py-4 break-words w-24">
                <div role="status" className="max-w-sm animate-pulse">
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableSkeleton;
