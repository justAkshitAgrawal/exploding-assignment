import CategoriesCard from "@/components/CategoriesCard";
import ChartCard from "@/components/ChartCard";
import RelatedTopics from "@/components/RelatedTopics";
import React from "react";

const DataPage = () => {
  return (
    <div className="w-[60rem] ">
      <div className="self-start mt-20 text-xs">
        <h3>
          <span className="text-gray-400 cursor-pointer">
            Trends Databse /{" "}
          </span>
          Data Lakehouse
        </h3>
      </div>

      <div className="flex items-center gap-2 mt-10">
        <h1 className="text-3xl font-medium">Data Lakehouse</h1>
        <p className="text-gray-400 text-xs">(Keyword)</p>
      </div>
      <p className="mt-10 text-gray-600">{`Data solution concept combining "data warehouse" and "data lake".`}</p>
      <div className="mt-10">
        <ChartCard />
      </div>
      <div className="mt-10">
        <CategoriesCard />
      </div>
      <div className="mt-10">
        <RelatedTopics />
      </div>
    </div>
  );
};

export default DataPage;
