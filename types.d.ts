type Game = {
  background_image: string;
  id: number;
  metacritic: number;
  name: string;
  parent_platforms: { platform: Platform }[];
  rating_top: number; // integer
  rating: number; // floating
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

type Platform = {
  id: numnber;
  name: string;
  slug: string;
};

type FetchResponse<T> = {
  count: number;
  results: T[];
};
