import { Cates } from "@/components/components/cates";
import { Footer } from "@/components/components/Footer";
import { Navbar } from "@/components/components/Navbar";
import { Products } from "@/components/components/Products";
import { Categor, Category } from "./category";
const Product = [
  {
    title: "Hat",
  },
];

export default function Categories() {
  return (
    <div>
      <div className="flex mt-[52px]">
        <div>
          <Category />
          <Categor />
        </div>
        <Cates />
      </div>
    </div>
  );
}
