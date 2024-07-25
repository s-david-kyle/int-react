import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";
import ms from "ms";

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
    staleTime: ms("1d"),
    initialData: { count: platforms.length, results: platforms, next: "" },
  });
};

export default usePlatforms;
