import DisplayCard from "@/components/DisplayCard";
import FilterBy from "@/components/FilterBy";
import React from "react";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";
import Link from "next/link";

const Home = () => {
  return (
    <div className="mt-16 flex flex-col items-center">
      <h1 className="md:text-4xl text-3xl font-semibold text-center">
        Discover Exploding
        <br className="md:hidden" />
        Topics
      </h1>
      <p className="text-center mt-8 text-gray-600 font-light">
        We surface rapidly growing topics before
        <br className="md:hidden" />
        they take off.
      </p>
      <div className="mt-8">
        {" "}
        <FilterBy />{" "}
      </div>
      <div className="grid md:grid-cols-3 mt-10 place-items-center	md:gap-10 md:max-w-[82rem] md:w-max pb-10">
        {Array(14)
          .fill(0)
          .map((_, i) => (
            <Link href={i % 4 === 0 ? "/" : "/topic/data-lakehouse"} key={i}>
              <DisplayCard
                key={i}
                title="Data Lakehouse"
                description={`Data solution concept combining "data warehouse" and "data lake".`}
                growth={99}
                tag="Exploding"
                volume={1000}
                type={i % 4 === 0 ? "pro" : "free"}
              />
            </Link>
          ))}
      </div>

      <div className="md:self-start pb-20">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationLink
                className="border-black border rounded-none"
                href="#"
              >
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                className="hover:border-black border rounded-none"
                href="#"
                isActive
              >
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                className="hover:border-black border rounded-none"
                href="#"
              >
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                className="hover:border-black border rounded-none"
                href="#"
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>{" "}
      </div>
    </div>
  );
};

export default Home;
