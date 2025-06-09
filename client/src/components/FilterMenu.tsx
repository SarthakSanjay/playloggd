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

export function FilterMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="h-8 text-sm">Apply Filter</Button>
      </SheetTrigger>
      <SheetContent className="w-64 bg-greyblue border-0">
        <SheetHeader>
          <SheetTitle>
            <h1 className="text-lg font-light font-roboto text-lightblue  flex items-center">
              Filters
            </h1>
          </SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label htmlFor="genre">Genre</Label>
            <Input id="genre" defaultValue="" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-username">Username</Label>
            <Input id="sheet-demo-username" defaultValue="@peduarte" />
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
