"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";

type Product = {
  id: number;
  image: string;
  title: string;
  price: number;
  quantity: number;
};

const products: Product[] = [
  {
    id: 1,
    image: "/1.png",
    title: "Chunky Glyph Tee",
    price: 120000,
    quantity: 1,
  },
  {
    id: 2,
    image: "/2.png",
    title: "Chunky Glyph Tee",
    price: 120000,
    quantity: 1,
  },
  {
    id: 3,
    image: "/3.png",
    title: "Chunky Glyph Tee",
    price: 120000,
    quantity: 1,
  },
];

export const Cart = () => {
  const [cartProducts, setCartProducts] = useState(products);

  // Handle quantity change
  const handleQuantityChange = (id: number, increment: boolean) => {
    setCartProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: increment
                ? product.quantity + 1
                : product.quantity > 1
                ? product.quantity - 1
                : 1,
            }
          : product
      )
    );
  };

  // Handle product deletion
  const handleDelete = (id: number) => {
    setCartProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  const totalAmount = cartProducts.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <div className="w-[800px] h-[600px] mx-auto">
      <div className="flex flex-col gap-4">
        {cartProducts.map((product) => (
          <div
            key={product.id}
            className="flex gap-4 items-center p-4 border bg-white border-gray-200 rounded-lg"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={100}
              height={100}
            />
            <div className="flex flex-col gap-2">
              <span>{product.title}</span>
              <span>{product.price.toLocaleString()}₮</span>
              <div className="flex items-center gap-2">
                <button onClick={() => handleQuantityChange(product.id, false)}>
                  -
                </button>
                <span>{product.quantity}</span>
                <button onClick={() => handleQuantityChange(product.id, true)}>
                  +
                </button>
              </div>
            </div>
            <div className="ml-auto">
              <button onClick={() => handleDelete(product.id)}>
                <MdDeleteOutline size={30} />
              </button>
            </div>
          </div>
        ))}
        <div className="mt-4">
          <span>Total Amount: {totalAmount.toLocaleString()}₮</span>
        </div>
        <div className="flex justify-end">
          <Link href="/sags2">
            <button className="mt-2 p-2 bg-blue-500 w-[175px] rounded-[18px] text-white">
              Худалдан авах
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
