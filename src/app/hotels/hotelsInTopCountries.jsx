export default function HotelsInTopCountries() {
  const countries = [
    { name: "Saudi Arabia", path: "/hotels/saudi-arabia" },
    { name: "France", path: "/hotels/france" },
    { name: "Cape Verde", path: "/hotels/cape-verde" },
    { name: "United Arab Emirates", path: "/hotels/uae" },
    { name: "Qatar", path: "/hotels/qatar" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-20 py-8">
      <h2 className="text-xl font-bold mb-2 text-gray-900">
        Hotels In Top Countries
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {countries.map((country, index) => (
          <a
            key={index}
            href={country.path}
            className="text-gray-700 text-md hover:text-black"
          >
            Hotels in {country.name}
          </a>
        ))}
      </div>
    </div>
  );
}
