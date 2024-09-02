import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div
      className="flex flex-row items-center justify-between gap-8 w-screen p-8 md:p-16
        dark:bg-gray-700 bg-gray-100"
    >
      <div className="flex flex-col gap-8">
        <div className="text-left">
          <p>Built by</p>
          <a
            href="https://github.com/ozanyusufoglu/"
            className="dark:text-white text-lg"
          >
            Özgür Ozan
          </a>
          <p>with 🐵🧠</p>
          <br />
        </div>
      </div>

      <div className="flex flex-col self-end">
        <Link
          href="https://github.com/ozanyusufoglu/tiptap-nextjs-starter"
          className="p-0 text-violet-500"
        >
          <div className="flex sm:flex-row flex-col text-right items-end sm:items-center gap-4">
            <p className="">See the source code</p>
          </div>
        </Link>
        <p className="self-end">2024</p>
      </div>
    </div>
  );
}
