type Game = {
  background_image: string;
  id: number;
  name: string;
  parent_platforms: { platform: Platform }[];
};

type Platform = {
  id: number;
  name: string;
  slug: string;
};
