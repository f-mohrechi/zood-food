"use client";
import ClientProvider from "./ClientProvider";
import React, { useState } from "react";
import SidebarMenu from "./components/sideBar/SidebarMenu";
import Main from "./components/main/Main";
import Cart from "./components/main/Cart";

export default function App() {
  const [menuOptions, setMenuOptions] = useState([
    { img: "/img/home.svg" },
    { img: "/img/discount.svg" },
    { img: "/img/settings.svg" },
    { img: "/img/logout.svg" },
  ]);

  const [menuCategories, setMenuCategories] = useState([
    {
      name: "Hot Dishes",
      selected: true,
      items: [
        {
          id: 1,
          name: "Spicy seasoned seafood noodles",
          img: "/img/food-1.svg",
          price: 2.29,
          availability: true,
          numbers: "20",
        },
        {
          id: 2,
          name: "Salted Pasta with mushroom sauce",
          img: "/img/food-2.svg",
          price: 2.69,
          availability: false,
        },
        {
          id: 3,
          name: "Beef dumpling in hot and sour soup",
          img: "/img/food-3.svg",
          price: 2.99,
          availability: true,
          numbers: "5",
        },
        {
          id: 4,
          name: "Healthy noodle with spinach leaf",
          img: "/img/food-4.svg",
          price: 3.29,
          availability: true,
          numbers: "6",
        },
      ],
    },
    {
      name: "Cold Dishes",
      selected: false,
      items: [
        {
          id: 6,
          name: "Salted Pasta with mushroom sauce",
          img: "/img/food-6.svg",
          price: 2.69,
          availability: false,
        },
        {
          id: 5,
          name: "Spicy seasoned seafood noodles",
          img: "/img/food-1.svg",
          price: 2.29,
          availability: true,
          numbers: "20",
        },
        {
          id: 8,
          name: "Healthy noodle with spinach leaf",
          img: "/img/food-4.svg",
          price: 3.29,
          availability: true,
          numbers: "6",
        },
        {
          id: 7,
          name: "Beef dumpling in hot and sour soup",
          img: "/img/food-3.svg",
          price: 2.99,
          availability: true,
          numbers: "5",
        },
      ],
    },
    {
      name: "Soup",
      selected: false,
      items: [
        {
          id: 9,
          name: "Spicy seasoned seafood noodles",
          img: "/img/food-1.svg",
          price: 2.29,
          availability: true,
          numbers: "20",
        },
        {
          id: 11,
          name: "Beef dumpling in hot and sour soup",
          img: "/img/food-3.svg",
          price: 2.99,
          availability: true,
          numbers: "5",
        },
        {
          id: 10,
          name: "Salted Pasta with mushroom sauce",
          img: "/img/food-5.svg",
          price: 2.69,
          availability: false,
        },
        {
          id: 12,
          name: "Healthy noodle with spinach leaf",
          img: "/img/food-4.svg",
          price: 3.29,
          availability: true,
          numbers: "6",
        },
      ],
    },
    {
      name: "Grill",
      selected: false,
      items: [
        {
          id: 13,
          name: "Spicy seasoned seafood noodles",
          img: "/img/food-5.svg",
          price: 2.29,
          availability: true,
          numbers: "20",
        },
        {
          id: 14,
          name: "Salted Pasta with mushroom sauce",
          img: "/img/food-2.svg",
          price: 2.69,
          availability: false,
        },
        {
          id: 15,
          name: "Beef dumpling in hot and sour soup",
          img: "/img/food-3.svg",
          price: 2.99,
          availability: true,
          numbers: "5",
        },
        {
          id: 16,
          name: "Healthy noodle with spinach leaf",
          img: "/img/food-4.svg",
          price: 3.29,
          availability: true,
          numbers: "6",
        },
      ],
    },
    {
      name: "Appetizer",
      selected: false,
      items: [
        {
          id: 19,
          name: "Beef dumpling in hot and sour soup",
          img: "/img/food-6.svg",
          price: 2.99,
          availability: true,
          numbers: "5",
        },
        {
          id: 17,
          name: "Spicy seasoned seafood noodles",
          img: "/img/food-1.svg",
          price: 2.29,
          availability: true,
          numbers: "20",
        },
        {
          id: 18,
          name: "Salted Pasta with mushroom sauce",
          img: "/img/food-2.svg",
          price: 2.69,
          availability: false,
        },
        {
          id: 20,
          name: "Healthy noodle with spinach leaf",
          img: "/img/food-4.svg",
          price: 3.29,
          availability: false,
        },
      ],
    },
    {
      name: "Dessert",
      selected: false,
      items: [
        {
          id: 1,
          name: "Spicy seasoned seafood noodles",
          img: "/img/food-1.svg",
          price: 2.29,
          availability: true,
          numbers: "20",
        },
        {
          id: 2,
          name: "Salted Pasta with mushroom sauce",
          img: "/img/food-2.svg",
          price: 2.69,
          availability: false,
          numbers: "11",
        },
        {
          id: 3,
          name: "Beef dumpling in hot and sour soup",
          img: "/img/food-3.svg",
          price: 2.99,
          availability: true,
          numbers: "5",
        },
        {
          id: 4,
          name: "Healthy noodle with spinach leaf",
          img: "/img/food-4.svg",
          price: 3.29,
          availability: true,
          numbers: "6",
        },
      ],
    },
  ]);

  const handleTabClick = (index) => {
    const newCategories = [...menuCategories];
    newCategories.forEach((category, i) => {
      if (i === index) {
        category.selected = true;
      } else {
        category.selected = false;
      }
    });
    setMenuCategories(newCategories);
  };

  return (
    <>
      <ClientProvider>
        <div className="px-6 lg:px-16 2xl:px-40 py-6">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-start-1 col-end-2 h-full fixed top-6">
              <SidebarMenu options={menuOptions} />
            </div>

            <div className="col-start-2 col-end-8 h-full">
              <Main
                categories={menuCategories}
                handleTabClick={handleTabClick}
              />
            </div>
            <div className="col-start-8 col-end-13 fixed top-6 right-40">
              <Cart />
            </div>
          </div>
        </div>
      </ClientProvider>
    </>
  );
}
