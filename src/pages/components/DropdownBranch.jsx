import React, { useEffect, useState } from "react";

function DropdownBranch({ props, onCheckboxChangeBranch }) {
  const [searchBranch, setSearchBranch] = useState("");

  const handleSearch = (event) => {
    setSearchBranch(event.target.value);
  };

  const filterBranches = (branch) => {
    return branch.toLowerCase().includes(searchBranch.toLowerCase());
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
    onCheckboxChangeBranch(checkedItems);
  }, [checkedItems, onCheckboxChangeBranch]);

  return (
    <div
      id="dropdownBranch"
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
            className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 transition-all duration-200 focus:ring-[#2B161B] focus:border-[#2B161B] dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Wyszukaj klasę"
            value={searchBranch}
            onChange={handleSearch}
          />
        </div>
      </div>
      <ul
        className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownSearchBranch"
      >
        {props?.form?.tables.map((table) => {
          const uniqueBranches = [];
          table.zastepstwa.forEach((item) => {
            const isBranchExist = uniqueBranches.some(
              (branch) => branch === item.branch
            );
            if (!isBranchExist) {
              uniqueBranches.push(item.branch);
            }
          });

          uniqueBranches.sort((a, b) => a.charAt(0).localeCompare(b.charAt(0)));

          return (
            <>
              {uniqueBranches.filter(filterBranches).map((branch, index) => (
                <li key={index}>
                  <div className="flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input
                      id={`${branch.replace(" ", "-")}`}
                      type="checkbox"
                      name={branch}
                      checked={checkedItems[branch] || false}
                      onChange={handleCheckboxChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor={`${branch.replace(" ", "-")}`}
                      className="w-full py-2 ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                    >
                      {branch}
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

export default DropdownBranch;
