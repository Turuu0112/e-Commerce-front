import React from "react";
import { CiHeart } from "react-icons/ci";
 
// Define the Product type
type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};
 
const SaveProductList = () => {
  // Define the product data inside the component
  const products: Product[] = [
    {
      id: 1,
      name: "Chunky Glyph Tee",
      price: 120000,
      image: "/save1.png",
    },
    {
      id: 2,
      name: "Doodle Hoodie",
      price: 120000,
      image: "/save2.png",
    },
    {
      id: 3,
      name: "Local Styles Crewneck",
      price: 120000,
      image: "/save3.png",
    },
  ];
 
  return (
    <div className=" w-[800px] h-[600px] mx-auto   ">
      <h2 className="text-2xl font-bold  mb-5 flex flex-col">
        Хадгалсан бараа ({products.length})
      </h2>
      <div className="space-y-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center p-4 border border-gray-200 rounded-lg"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-100 h-100 object-cover rounded-lg mr-4"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-500">{product.price.toLocaleString()}₮</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Сагслах
              </button>
            </div>
            <CiHeart size={30} />
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default SaveProductList;
 
