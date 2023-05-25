import React, { useEffect, useState } from "react";

function DropdownTeachers({ props, onCheckboxChange }) {
  const [searchTeachers, setSearchTeachers] = useState("");

  const handleSearch = (event) => {
    setSearchTeachers(event.target.value);
  };

  const filterTeachers = (teacher) => {
    return teacher.toLowerCase().includes(searchTeachers.toLowerCase());
  };

  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [name]: checked,
    }));
  };

  useEffect(() => {
    onCheckboxChange(checkedItems);
  }, [checkedItems, onCheckboxChange]);

  return (
    <div
      id="dropdownTeacher"
      className="z-10 hidden bg-white rounded-lg shadow w-60 dark:bg-gray-700"
    >
      <div className="p-3">
        <label htmlFor="input-group-search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            autoComplete="false"
            id="input-group-search"
            className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Wyszukaj nauczyciela"
            value={searchTeachers}
            onChange={handleSearch}
          />
        </div>
      </div>
      <ul
        className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownSearchTeacher"
      >
        {props?.form?.tables.map((table) => {
          const uniqueTeachers = [];
          table.zastepstwa.forEach((item) => {
            const isTeacherExist = uniqueTeachers.some(
              (teacher) => teacher === item.teacher
            );
            if (!isTeacherExist) {
              uniqueTeachers.push(item.teacher);
            }
          });
          return (
            <>
              {uniqueTeachers.filter(filterTeachers).map((teacher, index) => (
                <li key={index}>
                  <div className="flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input
                      id={`${teacher.replace(" ", "-")}`}
                      type="checkbox"
                      name={teacher}
                      checked={checkedItems[teacher] || false}
                      onChange={handleCheckboxChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor={`${teacher.replace(" ", "-")}`}
                      className="w-full py-2 ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                    >
                      {teacher}
                    </label>
                  </div>
                </li>
              ))}
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default DropdownTeachers;
