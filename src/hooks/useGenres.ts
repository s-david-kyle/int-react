import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import axios from "axios";
import apiClient, { FetchResponse } from "../services/api-client";
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
    initialData: { count: genres.length, results: genres },
  });
};

export default useGenres;
