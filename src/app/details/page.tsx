import { Button } from "@/components/ui/button";
import Image from "next/image";

const Smallimg = [
  {
    image: "/small1.png",
  },
  {
    image: "/small2.png",
  },
  {
    image: "/small3.png",
  },
  {
    image: "/small4.png",
  },
];
const Product = [
  {
    title: "S",
  },
  {
    title: "M",
  },
  {
    title: "L",
  },
  {
    title: "XL",
  },
  {
    title: "2XL",
  },
];
export default function Details() {
  return (
    <div className="ml-[200px] mt-[52px]">
      <div className="flex gap-5">
        <div className="flex flex-col gap-1 pt-[95.5px] ">
          {Smallimg.map((slide, index) => (
            <Zurag key={index} image={slide.image} />
          ))}
        </div>
        <div>
          <Image
            src="/hoodie2.png"
            alt="hoodie"
            width={500}
            height={500}
            className="w-[426px]
          h-[641px] object-cover rounded-xl"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1>Wildflower Hoodie</h1>
          <p>Зэрлэг цэцгийн зурагтай даавуун материалтай цамц</p>
          <p>Хэмжээний заавар</p>
          <div className="flex gap-2">
            {Product.map((product) => (
              <div key={product.title}>
                <Button className="rounded-full size-10 bg-white text-black ">
                  {product.title}
                </Button>
              </div>
            ))}
          </div>

          <h1>120,000��</h1>
          <button className="bg-blue-500 text-white px-10 py-3 rounded-xl hover:bg-blue-400">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

type Detailsprops = {
  image: string;
  key: number;
};
const Zurag = ({ image }: Detailsprops) => {
  return (
    <div>
      <Image
        src={image}
        alt={image}
        width={100}
        height={100}
        className="object-fit rounded"
      />
    </div>
  );
};
