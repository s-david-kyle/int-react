import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/api-client";
import ms from "ms";

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
    staleTime: ms("1d"),
    initialData: { count: genres.length, results: genres, next: "" },
  });
};

export default useGenres;
