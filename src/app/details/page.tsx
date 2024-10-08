import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { Badge } from "@/components/ui/badge";
import Counter from "@/components/components/counter";
import { Productcard, Products } from "@/components/components/Products";

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
        <div className=" gap-1 pt-[95.5px] grid grid-cols-1   ">
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
        <div className="flex flex-col gap-4 justify-center">
          <Badge variant="outline" className="w-[52px] h-5 rounded-full">
            Шинэ
          </Badge>

          <span className="flex items-center text-[24px] font-bold">
            Wildflower Hoodie <CiHeart size={25} />
          </span>
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
          <Counter />
          <h1 className="font-bold">120&apos;000</h1>
          <button className="bg-blue-500 text-white  rounded-full hover:bg-blue-400 w-[175px] h-[36px]">
            Сагсанд нэмэх
          </button>
          <div className="flex gap-4 mt-[55px]">
            <span>Үнэлгээ</span>
            <span className="border-b text-blue-600">бүгдийг харах</span>
          </div>
        </div>
      </div>
      <div className=" gap-1 pt-[95.5px]    ">
        {Smallimg.map((slide, index) => (
          <RecommendedProduct key={index} image={slide.image} />
        ))}
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
const RecommendedProduct = ({ image }: Detailsprops) => {
  return (
    <div>
      <Products/>
    </div>
  );
};
