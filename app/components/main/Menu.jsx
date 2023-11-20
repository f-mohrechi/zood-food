import React from "react";
import FoodBox from "./FoodBox";

export default function Menu({ categories, handleTabClick }) {
  return (
    <div>
      <div className="flex items-center">
        {categories.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => handleTabClick(index)}
              className={`px-8 border-b-2 cursor-pointer pb-2 transition-all ease-in-out delay-75 ${
                item.selected
                  ? "border-b-primary-1 text-primary-1"
                  : "border-b-gray-brdr"
              }`}
            >
              <p className="">{item.name}</p>
            </div>
          );
        })}
      </div>

      <div>
        <p className="text-xl font-semibold mt-5">choose dishes</p>
      </div>

      <div className="grid grid-cols-3 mt-20 gap-x-10 gap-y-20">
        {categories
          .filter((item) => item.selected)
          .map((item) => {
            return item.items
              .sort((a, b) => b.availability - a.availability)
              .map((item, index) => {
                return <FoodBox foods={item} key={index} />;
              });
          })}
      </div>
    </div>
  );
}
