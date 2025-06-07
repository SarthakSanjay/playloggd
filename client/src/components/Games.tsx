import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { SortBy } from "./SortBy";

export default function Games() {
  return (
    <div className="">
      <FilterBar />
    </div>
  );
}

function FilterBar() {
  return (
    <div className="h-10 w-full bg-greyblue-200 flex items-center justify-between text-white">
      <div className="h-full w-max">12345 Games</div>
      <div className="h-full w-1/2">
        <Button>Apply Filter</Button>
        <Button>
          Display <ChevronDown />
        </Button>
        <div className="flex gap-2">Sort By </div>
        <SortBy />
      </div>
    </div>
  );
}
