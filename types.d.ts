type Game = {
  background_image: string;
  id: number;
  metacritic: number;
  name: string;
  parent_platforms: { platform: Platform }[];
};

type Platform = {
  id: number;
  name: string;
  slug: string;
};

type Genre = {
  id: number;
  name: string;
};
