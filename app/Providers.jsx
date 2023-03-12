"use client";

import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="dark:bg-gray-700 bg-gray-300 dark:text-gray-200 select-none">
        {children}
      </div>
    </ThemeProvider>
  );
}
