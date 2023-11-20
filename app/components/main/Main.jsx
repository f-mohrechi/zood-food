import React from "react";
import Header from "./Header";
import Menu from "./Menu";

export default function Main({ categories, handleTabClick }) {
  return (
    <div>
      <Header />
      <div className="my-10">
        <Menu categories={categories} handleTabClick={handleTabClick} />
      </div>
    </div>
  );
}
