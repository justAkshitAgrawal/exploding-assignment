import CategoriesCard from "@/components/CategoriesCard";
import ChartCard from "@/components/ChartCard";
import RelatedTopics from "@/components/RelatedTopics";
import React from "react";

const DataPage = () => {
  return (
    <div className="md:w-[60rem] ">
      <div className="self-start mt-20 text-xs">
        <h3>
          <span className="text-gray-400 cursor-pointer px-4">
            Trends Databse /{" "}
          </span>
          Data Lakehouse
        </h3>
      </div>

      <div className="flex items-center gap-2 md:mt-10 mt-4 px-4">
        <h1 className="md:text-3xl text-xl font-medium">Data Lakehouse</h1>
        <p className="text-gray-400 text-xs max-md:hidden">(Keyword)</p>
      </div>
      <p className="mt-10 px-4 max-md:text-xs text-gray-600">{`Data solution concept combining "data warehouse" and "data lake".`}</p>
      <div className="mt-10 max-md:px-4">
        <ChartCard trend="decreasing" />
      </div>
      <div className="mt-10 max-md:px-4">
        <CategoriesCard />
      </div>
      <div className="mt-10 max-md:px-4 pb-10">
        <RelatedTopics />
      </div>
    </div>
  );
};

export default DataPage;
