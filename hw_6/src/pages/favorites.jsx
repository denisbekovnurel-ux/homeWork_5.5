import { useFavoritesStore } from "../store/favorites-store.js";

export const Favorites = () => {
  const { data, isLoading } = useFavoritesStore();

  if (isLoading) return <progress />;

  return (
    <>
      <h1 className="text-4xl font-bold">Favorites</h1>

      <ul>
        {data?.map((item) => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
};
