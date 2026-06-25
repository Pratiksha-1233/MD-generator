"use client";
import { useState } from "react";
import Stack from "./components/stack/stack";
import Design from "./components/design/design";
import generateMDs from "./functionality/generate";

export default function Home() {
  const [ tab, setTab ] = useState<"stack" | "design">("stack");

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="p-5">
        <ul className="flex gap-5">
          <li 
            className="hover:cursor-pointer hover:underline" onClick={() => setTab("stack")}>Stack</li>
          <li className="hover:cursor-pointer hover:underline" onClick={() => setTab("design")}>Design</li>
        </ul>
      </nav>
      <main className="p-5">
        <div className={(tab === "stack") ? "" : "hidden"}>
          <Stack />
        </div>
        <div className={(tab === "design") ? "" : "hidden"}>
          <Design />
        </div>
      </main>
      <footer className="sticky bottom-0 mt-auto">
        <div className="bg-white dark:bg-[#0a0a0a] px-20 py-3 border-t dark:border-white flex justify-end">
          <button
            className="bg-white p-2 rounded-md text-black cursor-pointer hover:outline-1"
            onClick={generateMDs}
          >Generate MDs</button>
        </div>
      </footer>
    </div>
  );
}
