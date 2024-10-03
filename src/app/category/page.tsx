import { Cates } from "@/components/components/cates";

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
