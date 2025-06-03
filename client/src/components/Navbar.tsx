"use client";
import { cn } from "@/lib/utils";
import { Bell, ChevronDown, Plus, SearchIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Navbar() {
  return (
    <nav className="h-14 w-full flex items-center justify-between">
      <Logo />

      <div className="w-1/2 h-full flex gap-1 items-center text-white pl-5">
        <Bell strokeWidth={1} size={20} />
        <Profile />
        <Button className="bg-transparent hover:bg-transparent cursor-pointer text-white/50 hover:text-white text-[15px] font-bold px-1">
          Games
        </Button>
        <Search />
        <Button className="h-8 w-32 bg-lightblue hover:bg-lightblue-800 rounded-sm text-md flex gap-1 items-center">
          <Plus strokeWidth={2} size={20} />
          Log a Game
        </Button>
      </div>
    </nav>
  );
}

function Search() {
  return (
    <div className="h-8 w-52 bg-greyblue-200 flex items-center justify-between pr-1 rounded-sm">
      <Input
        className="h-8 w-40 border-none focus-visible:ring-0 px-1"
        placeholder="Search"
      />
      <SearchIcon strokeWidth={2} size={20} />
    </div>
  );
}

function Logo() {
  return (
    <h1 className="text-2xl font-bold text-white">
      Playlo<span className="text-lightblue">gg</span>d
    </h1>
  );
}

function Username({ toggle }: { toggle: boolean }) {
  return (
    <div
      className={cn(
        "w-max  text-white flex items-center justify-between gap-1 font-medium font-roboto text-sm min-h-8 rounded-sm px-2 ",
        toggle ? "bg-lightblue rounded-b-none" : "",
      )}
    >
      <div>sharko_11</div>
      <ChevronDown strokeWidth={2} size={20} />
    </div>
  );
}

function Profile() {
  const [toggle, setToggle] = useState(false);

  const navItems = [
    "Profile",
    "Played",
    "Playing",
    "Backlog",
    "Wishlist",
    "Journal",
    "Activity",
    "Reviews",
    "Lists",
    "Friends",
    "Likes",
    "Setting",
    "Log Out",
  ];

  return (
    <div
      className="flex flex-col relative cursor-pointer"
      onMouseEnter={() => setToggle(true)}
      onMouseLeave={() => setToggle(false)}
    >
      <Username toggle={toggle} />
      {toggle && (
        <div className="absolute top-full left-0 h-max w-full bg-lightblue text-white rounded-b-md">
          {navItems.map((item, idx) => {
            return (
              <div
                key={item + idx}
                className={cn(
                  "h-6 w-full font-medium font-roboto text-sm px-2 flex items-center hover:bg-lightblue-800",
                  item === "Log Out" ? "rounded-b-sm" : "",
                  item === "Profile" || item === "Wishlist" || item === "Likes"
                    ? "border-b"
                    : "",
                )}
              >
                {item}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
