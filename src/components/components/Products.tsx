"use client";

import Image from "next/image";
import Link from "next/link";

const product = [
  {
    price: "120,000₮",
    image: "/magazine.png",
    description: "The Prompt Magazine",
  },
  {
    price: "100,000₮",
    image: "/image.png",
    description: "Chunky Glyph Tee",
  },
  {
    price: "200,000₮",
    image: "/cup.png",
    description: "All Smiles Nalgene",
  },
  {
    price: "150,000₮",
    image: "/white.png",
    description: "Wildflower Hoodie",
  },
  {
    price: "250,000₮",
    image: "/tee.png",
    description: "Inkblot Tee",
  },
  {
    price: "250,000₮",
    image: "/longsleeve.png",
    description: "Gestures Longsleeve",
  },
  {
    price: "25,000₮",
    image: "/hat.png",
    description: "Chunky Glyph Cap",
  },
  {
    price: "125,000₮",
    image: "/crew.png",
    description: "Local Styles Crewneck",
  },
  {
    price: "25,000₮",
    image: "/hat.png",
    description: "Chunky Glyph Cap",
  },
  {
    price: "250,000₮",
    image: "/doodle.png",
    description: "Doodle Hoodie",
  },
  {
    price: "100,000₮",
    image: "/image.png",
    description: "Chunky Glyph Tee",
  },
  {
    price: "120,000₮",
    image: "/magazine.png",
    description: "The Prompt Magazine",
  },
  {
    price: "200,000₮",
    image: "/cup.png",
    description: "All Smiles Nalgene",
  },
  {
    price: "200,000₮",
    image: "/corners.png",
    description: "Independent Corners Tee",
  },
  {
    price: "120,000₮",
    image: "/magazine.png",
    description: "The Prompt Magazine",
  },
  {
    price: "100,000₮",
    image: "/image.png",
    description: "Chunky Glyph Tee",
  },
  {
    price: "200,000₮",
    image: "/cup.png",
    description: "All Smiles Nalgene",
  },
  {
    price: "150,000₮",
    image: "/white.png",
    description: "Wildflower Hoodie",
  },
];

export const Products = () => {
  return (
    <div className="w-screen h-full px-[200px] mt-10 ">
      <div className="grid grid-cols-4 grid-rows-5  gap-5 [&>div:nth-child(7)]:col-span-2   [&>div:nth-child(8)]:col-span-2 ">
        {product.map((p, index) => (
          <div key={index} className="h-full w-full ">
            <Productcard
              key={index}
              image={p.image}
              description={p.description}
              price={p.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
type Prductcardprops = {
  description: string;
  price: string;
  image: string;
};
const Productcard = ({ description, price, image }: Prductcardprops) => {
  return (
    <Link href="/details">
      <div className="h-full w-full ">
        <Image
          src={image}
          alt={description}
          width={400}
          height={500}
          className="object-cover rounded-2xl "
        />
        <h1>{description}</h1>
        <h1>{price}</h1>
      </div>
    </Link>
  );
};
