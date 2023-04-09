import { useEffect, useState } from "react";

import apiClient from "../api/apiClient";
import { CanceledError } from "axios";

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

export default function useGenres() {
  const [loading, setLoading] = useState(false);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchGenresResponse>("/genres", { signal: controller.signal })
      .then(res => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch(err => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { loading, genres, error };
}
