import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";
import apiClient, { FetchResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  const client = new APIClient<Platform>("/platforms/lists/parents");

  return useQuery({
    queryKey: ["platforms"],
    queryFn: () => client.getAll({}),
    staleTime: 1000 * 60 * 60 * 24,
    initialData: { count: platforms.length, results: platforms },
  });
};

export default usePlatforms;
