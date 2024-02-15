import React from "react";
import { Filter } from "./Filter";
import { Input } from "./ui/input";
import { MdOutlineSearch } from "react-icons/md";
import { Button } from "./ui/button";

const yearFilters = [
  {
    value: "3",
    label: "3 Months",
  },
  {
    value: "6",
    label: "6 Months",
  },
  {
    value: "9",
    label: "9 Months",
  },
  {
    value: "12",
    label: "12 Months",
  },
];

const categoryFilters = [
  {
    value: "ai",
    label: "AI",
  },
  {
    value: "finance",
    label: "Finance",
  },
  {
    value: "technology",
    label: "Technology",
  },
  {
    value: "concept",
    label: "Concept",
  },
  {
    value: "all",
    label: "All",
  },
];

const FilterBy = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-5">
      <p className="text-xs font-medium self-start md:hidden">FILTER BY:</p>

      <div className="flex items-center gap-5">
        <p className="text-xs font-medium max-md:hidden text-nowrap">
          FILTER BY:
        </p>
        <Filter data={yearFilters} />
        <Filter data={categoryFilters} />
      </div>
      <div className="flex items-center rounded-md gap-1 px-2 border border-gray-300 hover:border-black w-full ">
        <MdOutlineSearch />
        <Input
          placeholder="Search Trends"
          className="md:w-[200px] p-0 hover:ring-0"
          disabled
        />
        <Button
          className="
        bg-gradient-to-r from-blue-500 to-blue-600 px-3 py-0 h-6 rounded text-[10px]
        "
        >
          PRO
        </Button>
      </div>
    </div>
  );
};

export default FilterBy;
