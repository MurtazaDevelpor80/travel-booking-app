import paris from "../assets/paris.jpg";
import tokyo from "../assets/tokyo.jpg";
import ny from "../assets/ny.jpg";





const destinations = [
  {
    id: 1,
    name: "Paris",
    description: "Eiffel Tower, cafes, and museums.",
    image: paris,
    continent: "Europe",
    price: 1200,
  },
  {
    id: 2,
    name: "Tokyo",
    description: "Tradition and technology.",
    image: tokyo,
    price: 1500,
  },
  {
    id: 3,
    name: "Maldives",
    description: "Tropical paradise.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFEHhl-JrG3tnMxS_8nsuJTCe9ZJh4y9-CBg&s",
    continent: "Asia",
    price: 2000,
  },
  {
    id: 4,
    name: "New York",
    description: "City that never sleeps.",
    image: ny,
    continent: "North America",
    price: 1000,
  },
];

export default destinations;
