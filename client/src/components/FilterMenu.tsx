import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChevronLeft } from "lucide-react";
import { ChooseCategory } from "./ChooseCategory";

export function FilterMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="h-8 text-sm">Apply Filter</Button>
      </SheetTrigger>
      <SheetContent className="w-64 bg-greyblue border-0">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-between border-b border-greyblue-200">
            <h1 className="text-2xl font-light font-roboto text-lightblue  flex items-center">
              Filters
            </h1>
            <SheetClose asChild>
              <Button
                className="text-white text-xl"
                variant="ghost"
                size={"icon"}
              >
                <ChevronLeft />
              </Button>
            </SheetClose>
          </SheetTitle>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="space-y-2 text-white">
            <h1>Release Year</h1>
            <div className="h-8 w-full flex justify-between">
              <Button
                className="h-7 bg-transparent rounded-sm"
                variant={"outline"}
              >
                Upcoming
              </Button>
              <Button
                className="h-7 bg-transparent rounded-sm"
                variant={"outline"}
              >
                Released
              </Button>
            </div>
            <Button
              className="h-7 w-full bg-transparent rounded-sm"
              variant={"outline"}
            >
              Choose a year
            </Button>
          </div>
          <div className="w-full flex flex-col text-white">
            <div>Genre</div>
            <ChooseCategory />
          </div>
          <div className="w-full flex flex-col text-white">
            <div>Game Category</div>
            <ChooseCategory />
          </div>
          <div className="w-full flex flex-col text-white">
            <div>Platform Released On</div>
            <ChooseCategory />
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
