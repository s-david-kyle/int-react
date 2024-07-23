import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import axios from "axios";
import apiClient from "../services/api-client";

interface FetchResponse {
  count: number;
  results: Genre[];
}

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  return useQuery<Genre[], Error>({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse>("/genres").then((res) => res.data.results),
  });
};

export default useGenres;
