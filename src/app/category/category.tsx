import { CheckboxIcon } from "@radix-ui/react-icons";

const Products = [
  {
    title: "Малгай",
  },
  {
    title: "Уснысав",
  },
  {
    title: "T-shirt",
  },
  {
    title: "Hoodie",
  },
  {
    title: "Tee",
  },
  {
    title: "Цүнх",
  },
];
export const Category = () => {
  const sortedProducts = [...Products].sort((a, b) =>
    a.title.localeCompare(b.title)
  );
  return (
    <div className="ml-[200px]">
      <h1>Ангилал</h1>
      {Products.map((product) => (
        <div key={product.title}>
          <h2 className="flex gap-2 items-center p-2">
            <input type="checkbox" />
            {product.title}
          </h2>
        </div>
      ))}
    </div>
  );
};
const Product = [
  {
    title: "Free",
  },
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
  {
    title: "3XL",
  },
];
export const Categor = () => {
  const sortedProducts = [...Product].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return (
    <div className="ml-[200px] mt-[48px]">
      <h1>Ангилал</h1>
      {Product.map((product) => (
        <div key={product.title}>
          <h2 className="flex gap-2 items-center p-2">
            <input type="checkbox" />
            {product.title}
          </h2>
        </div>
      ))}
    </div>
  );
};
