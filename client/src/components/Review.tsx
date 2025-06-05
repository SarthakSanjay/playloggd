import { Dot, Star } from "lucide-react";
import { GameCard } from "./GameCard";

export default function Review() {
  return (
    <div className="h-64 w-1/2 border border-white flex">
      <GameCard size={"md"}>
        <img
          className="h-full w-full rounded-sm object-cover object-center"
          src={
            "https://4kwallpapers.com/images/wallpapers/the-witcher-4-concept-art-2023-games-snow-covered-white-1280x1280-7726.jpg"
          }
        />
      </GameCard>
      <div className="h-full w-[88%] border border-white pl-4">
        <div className="flex items-center gap-2 h-7 w-full">
          <h1 className="text-white/80 font-medium text-lg h-full">Username</h1>
          <div className="flex items-end gap-1">
            <span className="h-full flex items-center text-sm font-light text-zinc-400">
              reviewed
            </span>
            <span className="h-full text-base flex items-center text-white font-roboto">
              Game Name
            </span>
          </div>
        </div>
        <div className="h-5 w-full flex gap-1 items-center">
          <div className="h-full w-max flex">
            {[1, 2, 3, 4, 5].map((i) => {
              return <Star key={i} fill="grey" strokeWidth={0} size={18} />;
            })}
          </div>
          <div className="flex items-center gap-1">
            <span className="h-[5px] w-[5px] rounded-full bg-green-400"></span>
            <span className="text-sm text-white font-light">Completed</span>
            <div className="text-sm text-zinc-400 font-light">
              on <span className="text-white">Mac</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
