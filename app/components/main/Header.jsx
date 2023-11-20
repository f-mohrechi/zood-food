import React from "react";
import SearchInput from "../inputs/SearchInput";

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-white text-3xl font-semibold">Jaegar Resto</p>
        <p className="text-gray-txt pt-1">Sunday, 19 Nov 2023</p>
      </div>

      <div>
        <SearchInput />
      </div>
    </div>
  );
}
