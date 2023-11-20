import React from "react";

export default function TextField() {
  return (
    <div
      className="bg-gray-back border border-gray-brdr rounded-lg py-2.5 px-3.5 focus-within:border-primary-2 focus-within:shadow-main focus-within:shadow-main-pink;
    "
    >
      <input
        className="bg-transparent w-full outline-none"
        placeholder="search"
      />
    </div>
  );
}
