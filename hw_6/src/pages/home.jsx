import { useProductStore } from "../store/product-store.js";
import { ProductCard } from "../components/product-card.jsx";

export const Home = () => {
  const { data, isLoading } = useProductStore();

  if (isLoading) return <progress />;

  return (
    <>
      <h1 className="text-4xl font-bold">Products</h1>
      <ul className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data?.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </ul>
    </>
  );
};
