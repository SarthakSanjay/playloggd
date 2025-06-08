import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SortBy() {
  return (
    <Select>
      <SelectTrigger size="sm" className="w-[180px]">
        <SelectValue
          placeholder="Sort By"
          className="placeholder:text-lightblue"
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sort By</SelectLabel>
          <SelectItem value="gameTitle">Game Title</SelectItem>
          <SelectItem value="Trending">Trending</SelectItem>
          <SelectItem value="releaseDate">Release Date</SelectItem>
          <SelectItem value="popularity">Popularity</SelectItem>
          <SelectItem value="gameRating">Game Rating</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
