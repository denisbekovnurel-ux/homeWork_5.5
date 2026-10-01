import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { $authApi } from "../api/http.js";

const favoriteUrl = (productId) => `/favorites/${productId}`;

export const useFavoritesStore = () =>
  useQuery({
    queryKey: ["favorites"],
    queryFn: async () => {
      const { data } = await $authApi.get("/favorites");
      return data?.data?.products;
    },
  });

const handleFavoriteError = (error) => {
  if (error?.response?.status === 401) {
    alert("Пожалуйста, войдите в систему или зарегистрируйтесь");
    return;
  }
  toast.error(
    error?.response?.data?.message || "Что-то пошло не так, попробуй ещё раз",
  );
};

export const useAddToFavorite = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (productId) => {
      const { data } = await $authApi.post("/favorites", { productId });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      queryClient.invalidateQueries({ queryKey: ["favorites"] });
    },
    onError: handleFavoriteError,
  });
};

export const useRemoveFromFavorite = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (productId) => {
      const { data } = await $authApi.delete(favoriteUrl(productId));
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      queryClient.invalidateQueries({ queryKey: ["favorites"] });
    },
    onError: handleFavoriteError,
  });
};
