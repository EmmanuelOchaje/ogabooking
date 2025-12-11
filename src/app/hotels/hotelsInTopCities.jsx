import Image from "next/image";

const cities = [
  {
    name: "Jerusalem",
    img: "https://images.unsplash.com/photo-1556861321-b7a1e5b1c291?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amVydXNhbGVtfGVufDB8fDB8fHww",
  },
  {
    name: "Praia",
    img: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByYWlhfGVufDB8fDB8fHww",
  },
  {
    name: "Dubai",
    img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Doha",
    img: "https://images.unsplash.com/photo-1647252257220-b0e9118c56d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRvaGF8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Paris",
    img: "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function HotelsInTopCities() {
  return (
    <div className="max-w-7xl mx-auto px-20">
      <h2 className="text-xl font-bold mb-3">Hotels In Top Cities</h2>

      <div className="flex gap-4 overflow-x-auto pb-4">
        {cities.map((city) => (
          <div
            key={city.name}
            className="relative flex-none w-44 h-60 rounded-xl shadow-lg overflow-hidden cursor-pointer group"
          >
            <Image
              src={city.img}
              alt={city.name}
              fill
              sizes="176px"
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-1 from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white text-xl font-semibold">{city.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
