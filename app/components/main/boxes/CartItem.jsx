import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { removeFromCart } from "@/actions/action";

export default function CartItem({ food }) {
  const dispatch = useDispatch();

  const handleDelete = (foodItem) => {
    dispatch(removeFromCart(foodItem));
  };

  const totalPrice = food.price * food.quantity;

  return (
    <div className="py-5">
      <div className="grid grid-cols-6 items-center">
        <div className="col-span-3">
          <div className="flex">
            <Image src={food.img} width={40} height={40} alt="" />
            <div className="pl-5">
              <p className="text-sm font-medium">{food.name}</p>
              <p className="text-xs font-medium text-gray-txt">
                $ {food.price}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="bg-gray-back rounded-lg border border-gray-brdr w-12 h-12 flex items-center justify-center">
            <p>{food.quantity}</p>
          </div>
        </div>

        <div>
          <p className="font-semibold text-end">$ {totalPrice.toFixed(2)}</p>
        </div>

        <div className="flex justify-end">
          <button onClick={() => handleDelete(food)}>
            <img className="w-6 h-6" src="/img/delete.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
