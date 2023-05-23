import React from "react";

function Layout({ children }) {
  return (
    <div className="min-h-screen w-screen flex flex-col justify-center items-center bg-slate-50 dark:bg-gray-900">
      {children}
    </div>
  );
}

export default Layout;
