import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Check, History, Layers, Plus, RotateCcw } from "lucide-react";
import { DialogClose } from "@radix-ui/react-dialog";
import LogHead from "./LogHead";
import MenuBar from "./MenuBar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useState } from "react";

export function LogGame() {
  const [checked, setChecked] = useState(false);
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className="h-8 w-32 bg-lightblue hover:bg-lightblue-800 rounded-sm text-md flex gap-1 items-center">
            <Plus strokeWidth={2} size={20} />
            Log a Game
          </Button>
        </DialogTrigger>
        <DialogContent
          showCloseButton={false}
          className="h-11/12 max-w-[85%]! gap-0 flex flex-col bg-greyblue border-white/20 p-0 "
        >
          <DialogTitle className="hidden" />
          <LogHead />
          <div className="h-full w-full border-y border-white/20 relative">
            <MenuBar />
            <div className="h-[calc(100%-96px)] w-full border border-lightblue flex">
              <div className="h-full w-7/12 border">
                <div className="h-1/6 w-full border flex items-end">
                  <div className="flex flex-col w-1/2 items-start p-2 gap-1 justify-center">
                    <Label className="text-lg text-white h-8">Log Title</Label>
                    <Input
                      placeholder="Title your log"
                      className="rounded-sm h-8"
                    />
                  </div>
                  <Button
                    className="bg-greyblue-200 h-8 mb-2"
                    onClick={() => setChecked(!checked)}
                  >
                    <RotateCcw size={20} /> <span>Replay</span>
                    <div className="h-4 w-4 text-green-500 border rounded-xs flex justify-center items-center">
                      {checked ? <Check size={10} /> : ""}
                    </div>
                  </Button>
                </div>
              </div>
              <div className="h-full w-5/12 border"></div>
            </div>
            <div className="h-12 w-full bg-greyblue-200 flex items-center justify-end gap-2 px-2 absolute bottom-0">
              <DialogClose className="bg-lightblue">Cancle</DialogClose>
              <Button>Create Log</Button>
            </div>
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
}
