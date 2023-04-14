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
  id: number;
  image_background: string;
  name: string;
};

type Platform = {
  id: numnber;
  name: string;
  slug: string;
};
