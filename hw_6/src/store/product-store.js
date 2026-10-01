import { useQuery } from "@tanstack/react-query";
import { $authApi } from "../api/http.js";

export const useProductStore = () =>
  useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await $authApi.get("/products");
      return data?.data;
    },
  });
