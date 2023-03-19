import React, { useState } from "react";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  console.log(search)

  const categories = [
    { label: "All Category", url: "/case-studies/all" },
    { label: "Web Design", url: "/case-studies/web-design" },
    { label: "Web Development", url: "/case-studies/web-development" },
    { label: "UI/UX", url: "/case-studies/ui-ux" },
    { label: "Graphics Design", url: "/case-studies/graphics-design" },
  ];

  return (
    <div class="w-3/5 mx-auto flex items-center p-6 space-x-6  rounded-xl shadow-lg ">
      <div class="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 opacity-30"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          class="bg-gray-100 outline-none"
          type="text"
          placeholder="Search fruit name..."
        />
      </div>
      <div class="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">
        <select id="cars" className="p-1 text-xl">
          {categories.map((item) => (
            <option
              onClick={(e) => setSearch(e.target.innerText)}
              key={item.label}
            >
              {item.label}
            </option>
          ))}
        </select>
      </div>
      <div class="bg-green-400 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
        <span>Search</span>
      </div>
    </div>
  );
};

export default SearchInput;
