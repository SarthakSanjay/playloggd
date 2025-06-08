"use client";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { SortBy } from "./SortBy";
import { GameCard } from "./GameCard";
import { PaginationTab } from "./PaginationTab";
import { FilterMenu } from "./FilterMenu";

export default function Games() {
  return (
    <div className="h-max w-full overflow-y-scroll space-y-2">
      <FilterBar />
      <div className="h-max w-full flex flex-wrap gap-y-5 gap-x-5 justify-center border-b border-greyblue-200 pb-4">
        {Array(60)
          .fill("")
          .map((_, idx) => {
            return (
              <GameCard key={idx} size={"xxl"} className="border-none">
                <img
                  className="h-full w-full rounded-sm"
                  src={
                    idx % 2 === 0
                      ? "https://images.igdb.com/igdb/image/upload/t_cover_big/co1r7f.jpg"
                      : "https://images.igdb.com/igdb/image/upload/t_cover_big/co5ziw.jpg"
                  }
                />
              </GameCard>
            );
          })}
      </div>
      <PaginationTab />
    </div>
  );
}

function FilterBar() {
  return (
    <div className="h-10 w-full rounded-sm bg-greyblue-200 flex items-center justify-between text-white px-1 ">
      <div className="h-full w-max flex items-center text-sm">12345 Games</div>
      <div className="h-full w-1/2 flex items-center justify-end gap-1">
        <FilterMenu />
        <Button className="h-8 text-sm">
          Display <ChevronDown />
        </Button>
        <SortBy />
      </div>
    </div>
  );
}
