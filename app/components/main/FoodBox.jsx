import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, reduceQuantity } from "@/actions/action";

export default function FoodBox({ foods }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const foodInCart = cart.find((item) => item.id === foods.id) || {
    quantity: 0,
  };

  const handleAddToCart = (foodItem, quantity) => {
    dispatch(addToCart(foodItem, quantity));
  };

  const handleReduceQuantity = (foodItem) => {
    dispatch(reduceQuantity(foodItem));
  };

  return (
    <div className="bg-dark-2 w-56 px-4 pb-10 rounded-xl flex flex-col items-center relative">
      <div className="absolute -top-14">
        <Image src={foods.img} width={132} height={132} alt="" />
      </div>

      <p className="text-center text-sm font-medium mt-24">{foods.name}</p>

      <p className="text-sm pt-5">$ {foods.price}</p>

      <div className="pt-5">
        {foods.availability ? (
          <p className="text-sm text-gray-txt">
            {foods.numbers} Bowls available!
          </p>
        ) : (
          <p className="text-main-pink text-sm">Unavailable!</p>
        )}
      </div>

      <div className="flex items-center pt-5">
        <button
          className="bg-primary-1 w-7 h-7 border  rounded-md hover:bg-transparent border-primary-1"
          onClick={() => handleReduceQuantity(foods)}
        >
          -
        </button>
        <p className="px-4">{foodInCart.quantity}</p>
        <button
          className="bg-primary-1 w-7 h-7 border  rounded-md hover:bg-transparent border-primary-1"
          onClick={() => handleAddToCart(foods, 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}
