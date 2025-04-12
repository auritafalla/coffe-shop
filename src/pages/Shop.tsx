import { useState } from "react";
import { coffees } from "../data/coffee"; 
import CoffeeCard from "../components/CoffeeCard"; 

export default function Tienda() {
  
  const [category, setCategory] = useState<string>("all");
  const filteredCoffees = category === "all" ? coffees : coffees.filter((coffee) => coffee.category === category);

  return (
    <div className="flex">
      {/* Menú lateral */}
      <div className="w-60 bg-gray-100 p-4">
        <h2 className="font-bold text-lg mb-4">Categorias</h2>
        <ul>
          <li onClick={() => setCategory("all")} className="cursor-pointer hover:bg-gray-200 py-2 px-4 mb-2">
            Todos
          </li>
          <li onClick={() => setCategory("Cold")} className="cursor-pointer hover:bg-gray-200 py-2 px-4 mb-2">
            Cafés Fríos
          </li>
          <li onClick={() => setCategory("hot")} className="cursor-pointer hover:bg-gray-200 py-2 px-4 mb-2">
            Cafés Calientes
          </li>
          <li onClick={() => setCategory("bakery")} className="cursor-pointer hover:bg-gray-200 py-2 px-4 mb-2">
            Panadería
          </li>
          <li onClick={() => setCategory("alcoholic")} className="cursor-pointer hover:bg-gray-200 py-2 px-4 mb-2">
            Bebidas Alcoholicas
          </li>
        </ul>
      </div>

      {/* Contenido de los productos */}
      <div className="flex-1 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredCoffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
}
