type Game = {
  background_image: string;
  id: number;
  metacritic: number;
  name: string;
  parent_platforms: { platform: Platform }[];
  rating_top: number; // integer
  rating: number; // floating
  slug: string;
};

type Platform = {
  id: number;
  name: string;
  slug: string;
};

type Genre = {
  games_count: number;
  id: number;
  image_background: string;
  name: string;
  slug: string;
};

type FetchResponse<T> = {
  count: number;
  results: T[];
  next: string | null;
  previous: string | null;
};

type GameDetails = {
  description: string;
  description_raw: string;
  genres: Genre[];
  metacritic: number;
  name: string;
  platforms: { platform: Platform }[];
  publishers: Publisher[];
};

type Publisher = {
  id: number;
  name: string;
  slug: string;
};
