"use client";
import { BsFillLightbulbFill, BsFillLightbulbOffFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme == "system" ? systemTheme : theme;
  const [mount, setMount] = useState(false);

  useEffect(() => setMount(true), []);

  return (
    <>
      {mount && currentTheme === "dark" ? (
        <BsFillLightbulbFill
          className="text-xl cursor-pointer hover:text-amber-500"
          onClick={() => setTheme("light")}
        />
      ) : (
        <BsFillLightbulbOffFill
          className="text-xl cursor-pointer hover:text-amber-500"
          onClick={() => setTheme("dark")}
        />
      )}
    </>
  );
}
