import { useEffect, useState } from "react";
import "./App.css";
import { CountryContinentMap, CountryContinent } from "./constants/dummy";
import clsx from "clsx";
import Poop from "./Poop";

const ContinentFilter: CountryContinent[] = [
  "All",
  "Europe",
  "Asia",
  "Africa",
  "America",
  "Australia",
];

function App() {
  const [selectedContinent, setSelectedContinent] =
    useState<CountryContinent>("All");

  useEffect(() => {
    console.log(CountryContinentMap[selectedContinent]);
  }, [selectedContinent]);

  return (
    <main className="flex flex-col p-10 gap-3 min-h-screen w-screen">
      <span className="text-8xl">
        Country Filter
        <Poop />
      </span>
      <div className="flex gap-4">
        {ContinentFilter.map((continent) => (
          <button
            key={continent}
            className={clsx(
              `bg-white rounded-md py-2 px-4 outline-none`,
              selectedContinent === continent &&
                "shadow-[0_0_0_2px_inset_rgba(0,0,0)]"
            )}
            onClick={() => setSelectedContinent(continent)}
          >
            {continent}
          </button>
        ))}
      </div>
      <input className="w-[250px] bg-white outline-none rounded-md py-2 px-4" />
      <div className="flex flex-wrap gap-4 bg-white border border-gray-300 rounded-md p-4">
        {CountryContinentMap[selectedContinent].map((country, idx) => (
          <div
            key={`${country}-${selectedContinent}-${idx}`}
            className="bg-white rounded-md py-2 px-4"
          >
            {country}
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
