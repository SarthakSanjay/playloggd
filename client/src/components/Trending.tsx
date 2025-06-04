import { GameCard } from "./GameCard";
import { Button } from "./ui/button";

export default function Trending() {
  return (
    <div className="h-max w-full">
      <div className="h-10 w-full flex items-center justify-between">
        <h1 className="text-lg font-light font-roboto text-lightblue h-10 flex items-center">
          Recently Trending
        </h1>
        <Button className="h-8 hover:bg-greyblue-200 bg-transparent text-white/50 hover:text-white text-sm font-light cursor-pointer">
          See more
        </Button>
      </div>
      <div className="h-max w-full flex items-center justify-between">
        {[1, 2, 3, 4, 5, 6].map((n) => {
          return (
            <GameCard
              key={n}
              size={"xl"}
              className="border-lightblue rounded-sm"
            >
              <img
                className="h-full w-full object-center object-cover rounded-sm"
                src={
                  "https://4kwallpapers.com/images/wallpapers/the-witcher-4-concept-art-2023-games-snow-covered-white-1280x1280-7726.jpg"
                }
              />
            </GameCard>
          );
        })}
      </div>
    </div>
  );
}
