import { filterByCategory, filterByOrder, filterByPrice, filterByYear } from "./utils";

const Filters = () => {
  return (
    <div className="mt-5 border border-zinc-800 rounded-md p-4">
      <div className="flex justify-between items-center">
        <p className="text-xl">Filters</p>
         <select className="capitalize px-4 w-37.5 py-2 border bg-white border-zinc-800 rounded-md">
          {filterByOrder.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>   
      </div>
      <div className="mt-4">
        <input
          type="search"
          className="px-4 py-2 w-full border bg-white border-zinc-800 rounded-md"
          placeholder="Search"
        />
      </div>
      <div className="mt-4  flex flex-col lg:flex-row gap-2 capitalize justify-between items-baseline">
        <select className="capitalize px-4 py-2 w-full border bg-white border-zinc-800 rounded-md">
          {filterByPrice.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        <select className="capitalize px-4 py-2 w-full border bg-white border-zinc-800 rounded-md mt-2">
          {filterByCategory.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        <select className="capitalize px-4 py-2 w-full border bg-white border-zinc-800 rounded-md mt-2">
          {filterByYear.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;
