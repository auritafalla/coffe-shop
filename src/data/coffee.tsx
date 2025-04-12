export interface Coffee {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const coffees: Coffee[] = [
  {
    id: 1,
    name: "Lungo Coffee",
    description: "An espresso coffee drink, topped with a small amount of milk.",
    price: 199,
    image: "/images/4.jpg",
    category: "hot"
  },
  {
    id: 2,
    name: "Dalgona Coffee",
    description: "Whipped coffee made using instant coffee.",
    price: 159,
    image: "/images/dalgona.jpg",
    category: "hot"
  },
  {
    id: 3,
    name: "Iced Coffee",
    description: "Iced coffee is a coffee beverage served cold.",
    price: 149,
    image: "/images/iced.jpg",
    category: "Cold"
  },
  {
    id: 4,
    name: "Filter Coffee",
    description: "70% coffee and 30% chicory freshly roasted.",
    price: 59,
    image: "/images/capuchino.jpg",
    category: "Cold"
  },
];
