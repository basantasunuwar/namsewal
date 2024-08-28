export type Categories = {
  id: number;
  name: string;
  slug: string;
  description?: string;
  cakes?: Cakes[];
  image: string;
  price: number;
  metadescription: string;
};

export type Cakes = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export const categories: Categories[] = [
  {
    id: 1,
    name: "Black Forest",
    slug: "black-forest",
    image: "/category/blackForest/black_forest.jpg",
    price: 550,
    metadescription: "Black Forest Cake",
    description: "Black Forest Cake",
    cakes: [
      {
        id: 1,
        name: "Black Forest",
        price: 550,
        image: "/category/blackForest/black_forest.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "Chocolate",
    slug: "chocolate",
    image: "/category/chocolate/1.jpeg",
    price: 800,
    metadescription: "Chocolate Cake",
    description: "Chocolate Cake",
    cakes: [
      {
        id: 1,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/1.jpeg",
      },
      {
        id: 2,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/2.jpeg",
      },
      {
        id: 3,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/3.jpg",
      },
      {
        id: 4,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/4.jpg",
      },
      {
        id: 5,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/5.png",
      },
      {
        id: 6,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/6.jpg",
      },
      {
        id: 7,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/7.jpg",
      },
      {
        id: 8,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/8.jpg",
      },
      {
        id: 9,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/9.jpg",
      },
      {
        id: 10,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/10.jpg",
      },
      {
        id: 11,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/11.jpg",
      },
      {
        id: 12,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/12.jpg",
      },
      {
        id: 13,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/13.jpg",
      },
      {
        id: 14,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/14.jpeg",
      },
      {
        id: 15,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/15.jpeg",
      },
      {
        id: 16,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/16.jpeg",
      },
      {
        id: 17,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/17.jpeg",
      },
      {
        id: 18,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/18.jpeg",
      },
      {
        id: 19,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/19.jpeg",
      },
      {
        id: 20,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/20.jpeg",
      },
      {
        id: 21,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/21.jpg",
      },
      {
        id: 22,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/22.jpg",
      },
      {
        id: 23,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/23.jpg",
      },
      {
        id: 24,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/24.jpg",
      },
      {
        id: 25,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/25.jpg",
      },
      {
        id: 26,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/26.jpg",
      },
      {
        id: 27,
        name: "Chocolate",
        price: 800,
        image: "/category/chocolate/27.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Cup Cakes",
    slug: "cup-cakes",
    image: "/category/Cup Cakes/cup_cakes.jpg",
    price: 100,
    metadescription: "Cup Cakes",
    description: "Cup Cakes",
    cakes: [
      {
        id: 1,
        name: "Cup Cakes",
        price: 100,
        image: "/category/Cup Cakes/cup_cakes_1.jpg",
      },
      {
        id: 2,
        name: "Cup Cakes",
        price: 100,
        image: "/category/Cup Cakes/cup_cakes.jpg",
      },
    ],
  },
  {
    id: 4,
    name: "Doll Cake",
    slug: "doll-cake",
    image: "/category/doll_cake/1.jpg",
    price: 100,
    metadescription: "Doll Cake",
    description: "Doll Cake",
    cakes: [
      {
        id: 1,
        name: "Doll Cake",
        price: 1200,
        image: "/category/doll_cake/1.jpg",
      },
      {
        id: 2,
        name: "Doll Cake",
        price: 2000,
        image: "/category/doll_cake/doll_cake_price.jpg",
      },
    ],
  },
  {
    id: 5,
    name: "Fruit Cake",
    slug: "fruit-cake",
    image: "/category/Fruit Cake/1.jpg",
    price: 950,
    metadescription: "Fruit Cake",
    description: "Fruit Cake",
    cakes: [
      {
        id: 1,
        name: "Fruit Cake",
        price: 950,
        image: "/category/Fruit Cake/1.jpg",
      },
      {
        id: 2,
        name: "Fruit Cake",
        price: 950,
        image: "/category/Fruit Cake/2.jpg",
      },
      {
        id: 3,
        name: "Fruit Cake",
        price: 950,
        image: "/category/Fruit Cake/3.jpg",
      },
      {
        id: 4,
        name: "Fruit Cake",
        price: 950,
        image: "/category/Fruit Cake/4.jpg",
      },
      {
        id: 5,
        name: "Fruit Cake",
        price: 950,
        image: "/category/Fruit Cake/5.jpg",
      },
      {
        id: 6,
        name: "Fruit Cake",
        price: 950,
        image: "/category/Fruit Cake/6.jpg",
      },
      {
        id: 7,
        name: "Fruit Cake",
        price: 950,
        image: "/category/Fruit Cake/7.jpg",
      },
    ],
  },
  {
    id: 6,
    name: "Pastries",
    slug: "pastries",
    image: "/category/pestries/pastries.jpg",
    price: 100,
    metadescription: "Pastries",
    description: "Pastries",
    cakes: [
      {
        id: 1,
        name: "Pastries",
        price: 100,
        image: "/category/pestries/pastries.jpg",
      },
    ],
  },
  {
    id: 7,
    name: "White Forest",
    slug: "white-forest",
    image: "/category/whiteForest/white_forest.jpg",
    price: 600,
    metadescription: "White Forest Cake",
    description: "White Forest Cake",
    cakes: [
      {
        id: 1,
        name: "White Forest",
        price: 600,
        image: "/category/whiteForest/white_forest.jpg",
      },
      {
        id: 2,
        name: "White Forest",
        price: 600,
        image: "/category/whiteForest/white_forest_price.jpg",
      },
    ],
  },
  {
    id: 8,
    name: "Premium Cakes",
    slug: "premium-cakes",
    image: "/category/Premium Cakes/1.jpeg",
    price: 100,
    metadescription: "Premium Cakes",
    description: "Premium Cakes",
    cakes: [
      {
        id: 1,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/1.jpeg",
      },
      {
        id: 2,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/2.jpg",
      },
      {
        id: 3,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/3.jpg",
      },
      {
        id: 4,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/4.jpg",
      },
      {
        id: 5,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/5.jpg",
      },
      {
        id: 6,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/6.jpg",
      },
      {
        id: 7,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/7.jpg",
      },
      {
        id: 8,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/8.jpg",
      },
      {
        id: 9,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/9.jpg",
      },
      {
        id: 10,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/10.jpg",
      },
      {
        id: 11,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/11.jpg",
      },
      {
        id: 12,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/12.jpg",
      },
      {
        id: 13,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/13.jpg",
      },
      {
        id: 14,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/14.jpg",
      },
      {
        id: 15,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/15.jpg",
      },
      {
        id: 16,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/16.jpg",
      },
      {
        id: 17,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/17.jpg",
      },
      {
        id: 18,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/18.jpg",
      },
      {
        id: 19,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/19.jpg",
      },
      {
        id: 20,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/20.jpg",
      },
      {
        id: 21,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/21.jpg",
      },
      {
        id: 22,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/22.jpg",
      },
      {
        id: 23,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/23.jpg",
      },
      {
        id: 24,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/24.jpg",
      },
      {
        id: 25,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/25.jpg",
      },
      {
        id: 26,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/26.jpg",
      },
      {
        id: 27,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/27.jpg",
      },
      {
        id: 28,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/28.jpg",
      },
      {
        id: 29,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/29.jpg",
      },
      {
        id: 30,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/30.jpg",
      },
      {
        id: 31,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/31.jpg",
      },
      {
        id: 32,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/32.jpg",
      },
      {
        id: 33,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/33.jpeg",
      },
      {
        id: 34,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/34.jpeg",
      },
      {
        id: 35,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/35.jpeg",
      },
      {
        id: 36,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/36.jpeg",
      },
      {
        id: 37,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/37.jpeg",
      },
      {
        id: 38,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/38.jpeg",
      },
      {
        id: 39,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/39.jpeg",
      },
      {
        id: 40,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/40.jpeg",
      },
      {
        id: 41,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/41.jpeg",
      },
      {
        id: 42,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/42.jpeg",
      },
      {
        id: 43,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/43.jpeg",
      },
      {
        id: 44,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/44.jpeg",
      },
      {
        id: 45,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/45.jpeg",
      },
      {
        id: 46,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/46.jpeg",
      },
      {
        id: 47,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/47.jpeg",
      },
      {
        id: 48,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/48.jpg",
      },
      {
        id: 49,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/49.jpg",
      },
      {
        id: 50,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/50.jpeg",
      },
      {
        id: 51,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/51.jpg",
      },
      {
        id: 52,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/52.jpg",
      },
      {
        id: 53,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/53.jpg",
      },
      {
        id: 54,
        name: "Premium Cakes",
        price: 100,
        image: "/category/Premium Cakes/54.jpeg",
      },
    ],
  },
  {
    id: 9,
    name: "Red Velvet",
    slug: "red-velvet",
    image: "/category/red valvet/3.jpeg",
    price: 900,
    metadescription: "Red Velvet Cake",
    description: "Red Velvet Cake",
    cakes: [
      {
        id: 1,
        name: "Red Velvet",
        price: 900,
        image: "/category/red valvet/2.jpg",
      },
      {
        id: 2,
        name: "Red Velvet",
        price: 900,
        image: "/category/red valvet/3.jpeg",
      },
    ],
  },
  {
    id: 10,
    name: "Vanilla",
    slug: "vanilla",
    image: "/category/venilla/5.jpeg",
    price: 500,
    metadescription: "Vanilla Cake",
    description: "Vanilla Cake",
    cakes: [
      {
        id: 1,
        name: "Vanilla",
        price: 500,
        image: "/category/venilla/5.jpeg",
      },
      {
        id: 2,
        name: "Vanilla",
        price: 500,
        image: "/category/venilla/6.jpeg",
      },
      {
        id: 3,
        name: "Vanilla",
        price: 500,
        image: "/category/venilla/7.jpg",
      },
      {
        id: 4,
        name: "Vanilla",
        price: 500,
        image: "/category/venilla/8.jpg",
      },
      {
        id: 5,
        name: "Vanilla",
        price: 500,
        image: "/category/venilla/9.jpeg",
      },
      {
        id: 6,
        name: "Vanilla",
        price: 500,
        image: "/category/venilla/10.jpeg",
      },
      {
        id: 7,
        name: "Vanilla",
        price: 500,
        image: "/category/venilla/11.jpeg",
      },
      {
        id: 8,
        name: "Vanilla",
        price: 500,
        image: "/category/venilla/12.jpeg",
      },
      {
        id: 9,
        name: "Vanilla",
        price: 500,
        image: "/category/venilla/13.jpg",
      },
      {
        id: 10,
        name: "Vanilla",
        price: 500,
        image: "/category/venilla/14.jpeg",
      },
    ],
  },
];
