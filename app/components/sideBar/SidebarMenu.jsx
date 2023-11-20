import React from "react";
import { useSelector } from "react-redux";

export default function SidebarMenu({ options }) {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="bg-dark-2 rounded-2xl h-[94vh] py-6 px-4">
      <div className="flex flex-col items-center">
        <div className="">
          <img src="/img/logo-box.svg" alt="" />
        </div>

        <div className="my-10 relative">
          <img src="/img/cart.svg" className="" alt="" />

          <div className="absolute -top-3 -right-3 w-5 h-5  bg-primary-2 grayscale rounded-full flex justify-center items-center">
            <p className="text-xs">{cart.length}</p>
          </div>
        </div>
        {options.map((item, index) => {
          return (
            <div
              key={index}
              className="p-3 my-10 bg-transparent rounded-xl cursor-pointer"
            >
              <img className="" src={item.img} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
