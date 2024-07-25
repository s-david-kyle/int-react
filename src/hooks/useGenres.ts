import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  const client = new APIClient<Genre>("/genres");

  return useQuery({
    queryKey: ["genres"],
    queryFn: () => client.getAll({}),
    staleTime: 1000 * 60 * 60 * 24,
    initialData: { count: genres.length, results: genres, next: "" },
  });
};

export default useGenres;
