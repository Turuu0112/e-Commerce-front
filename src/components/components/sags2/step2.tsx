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
    quantity: 2,
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
    <div className="w-[800px] h-[600px] mx-auto flex">
      <div className="w-1/2 p-4">
        <h3 className="font-bold text-lg mb-4">Cart ({cartProducts.length})</h3>
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
                  <button
                    onClick={() => handleQuantityChange(product.id, false)}
                  >
                    -
                  </button>
                  <span>{product.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(product.id, true)}
                  >
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
        </div>
        <div className="mt-4 font-bold">
          Нийт төлөх дүн: {totalAmount.toLocaleString()}₮
        </div>
      </div>
      <div className="w-1/2 p-4">
        <h3 className="font-bold text-lg mb-4">Хүргэлтийн мэдээлэл оруулах</h3>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Овог"
            className="p-2 border border-gray-200 rounded-md"
          />
          <input
            type="text"
            placeholder="Нэр"
            className="p-2 border border-gray-200 rounded-md"
          />
          <input
            type="text"
            placeholder="Утасны дугаар"
            className="p-2 border border-gray-200 rounded-md"
          />
          <textarea
            placeholder="Хаяг"
            className="p-2 border border-gray-200 rounded-md"
          ></textarea>
          <textarea
            placeholder="Нэмэлт мэдээлэл"
            className="p-2 border border-gray-200 rounded-md"
          ></textarea>
          <Link href="/pay">
            <button className="mt-2 p-2 bg-blue-500 w-full rounded-[18px] text-white">
              Төлбөр төлөх
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};
