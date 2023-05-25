import React from "react";
function Content({ props, checkedTeachers }) {
  //   console.log(JSON.stringify(props));
  //   console.log(props.form.tables[0].zastepstwa[3]);

  //   props.form.tables.map((table) => {
  //     console.log("DZIEN:", table.time);
  //     table.zastepstwa.map((zastepstwo) => {
  //       console.log(zastepstwo);
  //     });
  //   });
  let filters;
  if (checkedTeachers) {
    filters = Object.keys(checkedTeachers).filter(
      (key) => checkedTeachers[key]
    );
  }
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-[90%] transition-all">
        {props?.form?.tables.map((table, index) => (
          <table
            className="w-full text-sm text-left text-gray-500 dark:text-gray-400 transition-all will-change-transform "
            key={index}
          >
            <caption className="p-5 transition-all text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
              {table.time}
              <div className="flex items-center">
                {filters?.length > 0 && (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="w-4 h-4 mr-1"
                    >
                      <path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" />
                    </svg>
                    <p className="mr-2">Filtry: </p>
                    {Object.entries(checkedTeachers).map(
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
              {table.zastepstwa.map((zastepstwo, index) => (
                <>
                  {(filters?.includes(zastepstwo?.teacher) ||
                    filters?.length == 0) && (
                    <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 transition-all"
                      key={index}
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium w-1 text-gray-900 whitespace-nowrap dark:text-white transition-all"
                      >
                        {zastepstwo?.lesson}
                      </th>
                      <td className="px-6 py-4 break-words w-24">
                        {zastepstwo?.teacher}
                      </td>
                      <td className="px-6 py-4 break-words w-24">
                        {zastepstwo?.branch}
                      </td>
                      <td className="px-6 py-4 break-words w-24">
                        {zastepstwo?.subject}
                      </td>
                      <td className="px-6 py-4 break-words w-24">
                        {zastepstwo?.class}
                      </td>
                      <td className="px-6 py-4 break-words w-24">
                        {zastepstwo?.case}
                      </td>
                      <td className="px-6 py-4 break-words w-24">
                        {zastepstwo?.message}
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        ))}
      </div>
    </>
  );
}
export default Content;
