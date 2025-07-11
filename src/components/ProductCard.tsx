import React from "react";


type ProductCardProps = {
  item: {
    id: number;
    title: string;
    price: number;
  };
};

const ProductCard = ({ item }: ProductCardProps) => {
  return (
    <div  className="flex py-4 flex-col border-1 border-gray-400 rounded-2xl" key={item.id}>
      <h3 className="text-3xl font-bold text-blue-300 hover:text-blue-500">
        {item.title}
      </h3>
      <h2 style={{ color: item.price > 100 ? "red" : "green" }}>
        price:${item.price}
      </h2>
    </div>
  );
};

export default ProductCard;
