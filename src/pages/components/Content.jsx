import React from "react";
function Content({ props }) {
  //   console.log(JSON.stringify(props));
  //   console.log(props.form.tables[0].zastepstwa[3]);

  //   props.form.tables.map((table) => {
  //     console.log("DZIEN:", table.time);
  //     table.zastepstwa.map((zastepstwo) => {
  //       console.log(zastepstwo);
  //     });
  //   });

  return (
    <>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg w-[90%]">
        {props.form.tables.map((table) => (
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
              {table.time}
            </caption>
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Lekcja
                </th>
                <th scope="col" class="px-6 py-3">
                  Nauczyciel
                </th>
                <th scope="col" class="px-6 py-3">
                  Oddział
                </th>
                <th scope="col" class="px-6 py-3">
                  Przedmiot
                </th>
                <th scope="col" class="px-6 py-3">
                  Sala
                </th>
                <th scope="col" class="px-6 py-3">
                  Zastępca
                </th>
                <th scope="col" class="px-6 py-3">
                  Uwagi
                </th>
              </tr>
            </thead>
            <tbody>
              {table.zastepstwa.map((zastepstwo) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium w-1 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {zastepstwo?.lesson}
                  </th>
                  <td class="px-6 py-4 break-words w-24">
                    {zastepstwo?.teacher}
                  </td>
                  <td class="px-6 py-4 break-words w-24">
                    {zastepstwo?.branch}
                  </td>
                  <td class="px-6 py-4 break-words w-24">
                    {zastepstwo?.subject}
                  </td>
                  <td class="px-6 py-4 break-words w-24">
                    {zastepstwo?.class}
                  </td>
                  <td class="px-6 py-4 break-words w-24">{zastepstwo?.case}</td>
                  <td class="px-6 py-4 break-words w-24">
                    {zastepstwo?.message}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ))}
      </div>
    </>
  );
}
export default Content;
