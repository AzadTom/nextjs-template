'use client';

import { ChevronDown, Search, Settings2 } from "lucide-react";
import { optionsList } from "./utils";
import { useState } from "react";
import HightLightWrapper from "../HightLightWrapper";

const sortOptions = ["Recommended", "Newest", "Price: low to high", "Price: high to low", "Rating: low to high", "Rating: high to low"];

const Filters2 = () => {
  const [selectedFilter, setSelectedFilter] = useState<(typeof optionsList)[number] | null>(null);

  return (
    <HightLightWrapper title="Filter Component Flow">
      <div className="mt-4 relative">
      <div className="border border-zinc-800 rounded-md flex items-center py-2 px-2">
       <Search />
        <input
          id="filter-search"
          type="search"
          placeholder="Search"
          className="w-full px-2 border-none outline-none"
        />
      </div>
      <ul className="flex items-center gap-2 overflow-x-scroll mt-4">
        <li
          onClick={() => setSelectedFilter({ label: "Sort by", showArrow: false, hasBottomSheet: true, options: sortOptions })}
          className="border border-zinc-800 text-sm rounded-full whitespace-nowrap px-2 py-2 cursor-pointer"
          aria-label="Sort and filter"
        >
          <Settings2 />
        </li>
        {optionsList.map((option) => (
          <li
            onClick={() => option.hasBottomSheet && setSelectedFilter(option)}
            className={`border border-zinc-800 px-2 py-2 text-sm rounded-md whitespace-nowrap ${option.hasBottomSheet ? "cursor-pointer" : ""}`}
            key={option.label}
          >
            <span className="inline-flex items-center gap-1">
              {option.label}
              {option.showArrow && <ChevronDown aria-hidden="true" size={14} />}
            </span>
          </li>
        ))}
      </ul>
      {selectedFilter && (
        <BottomSheet
          title={selectedFilter.label}
          data={selectedFilter.options ?? []}
          onClose={() => setSelectedFilter(null)}
        />
      )}
    </div>
    </HightLightWrapper>
  );
};

export default Filters2;


const BottomSheet = ({ title, data, onClose }: { title: string; data: string[]; onClose: () => void }) => {

    return (
        <div onClick={onClose} className="fixed inset-0 z-50 flex items-end bg-black/30">
           <HightLightWrapper title="BottomSheet Component">
            <div onClick={(e)=>e.stopPropagation()} className="min-h-44 w-full bg-white border-t border-gray-200 rounded-t-xl py-2">
            <div className="px-4 py-2 font-medium">{title}</div>
            {data.map((item, index) => (
               <label className="flex items-center gap-2 px-4 py-2" key={index}>
                <input type="radio" />
                <span className="px-4 py-2 text-base">
                {item}
              </span>
               </label>
            ))}
           </div> 
           </HightLightWrapper>
        </div>
    )
}
