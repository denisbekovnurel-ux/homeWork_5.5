import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import {
  useAddToFavorite,
  useRemoveFromFavorite,
} from "../store/favorites-store.js";

export function ProductCard({ product }) {
  const { mutate: addToFavorite, isPending: isAdding } = useAddToFavorite();
  const { mutate: removeFromFavorite, isPending: isRemoving } =
    useRemoveFromFavorite();

  const isPending = isAdding || isRemoving;

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (product.isFavorite) {
      removeFromFavorite(product._id);
    } else {
      addToFavorite(product._id);
    }
  };

  return (
    <li className="relative">
      <Link
        to={`/products/${product._id}`}
        className="block h-full rounded-2xl border border-[#dfe9e2] bg-white p-4 pr-12 shadow-sm transition hover:shadow-md"
      >
        <h3 className="font-semibold text-[#1d2321]">{product.name}</h3>
        <p className="mt-2 font-semibold text-[#0d8b67]">{product.price} сом</p>
      </Link>

      <button
        type="button"
        onClick={handleFavoriteClick}
        disabled={isPending}
        aria-label={
          product.isFavorite ? "Убрать из избранного" : "Добавить в избранное"
        }
        className="absolute right-3 top-3 rounded-full p-1 transition hover:bg-gray-100 disabled:opacity-50"
      >
        <Heart
          size={22}
          className={
            product.isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"
          }
        />
      </button>
    </li>
  );
}
