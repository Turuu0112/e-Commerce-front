import { Carousel } from "../components/components/Carousel";

import { Products } from "@/components/components/Products";

export default function Home() {
  return (
    <div className="w-[1660px] h-full m-auto">
      <Carousel />
      <Products />
    </div>
  );
}
