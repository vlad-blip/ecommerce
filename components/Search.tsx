import Image from "next/image";

import { ChangeEvent, useState } from "react";

export default function Search({ className }: { className: string }) {
  const [searchInput, setSearchInput] = useState<string>("");

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  return (
    <div
      className={`relative overflow-hidden py-2 md:py-0 md:flex md:items-center bg-gray-100 md:bg-white md:border-blue-500 border-2 border-gray-300 rounded-md ${className}`}
    >
      <Image
        className="absolute m-auto left-3 top-0 bottom-0 md:hidden"
        src="/icons/search.svg"
        width={22}
        height={22}
        alt="Search icon"
      />
      <input
        className="w-full pl-10 bg-inherit"
        type="text"
        placeholder="Search"
        value={searchInput}
        onChange={inputChangeHandler}
      />
      <button className="hidden md:flex whitespace-nowrap">
        <span>All category</span>
        <Image
          src="/icons/expand_more.svg"
          width={20}
          height={20}
          alt="Expand icon"
        />
      </button>
      <button className="hidden md:block bg-blue-500 text-white px-6 py-2">
        Search
      </button>
    </div>
  );
}
