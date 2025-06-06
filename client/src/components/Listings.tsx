import { GameCard } from "./GameCard";
import { Button } from "./ui/button";

export default function Listings() {
  return (
    <div className="h-max w-full flex items-center justify-between">
      <Listing type="coming-soon" />
      <Listing type="recently-anticipated" />
      <Listing type="sleeper-hits" />
    </div>
  );
}

function Listing({ type }: { type: string }) {
  const games = [
    "https://image.api.playstation.com/vulcan/ap/rnd/202212/2009/04S9doVJzhHa0OE8o8wax88S.png",
    "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/60eca3ac155247e21850c7d075d01ebf0f3f5dbf19ccd2a1.jpg",
    "https://static0.thegamerimages.com/wordpress/wp-content/uploads/sharedimages/2024/12/mixcollage-08-dec-2024-01-48-pm-7604.jpg",
    "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Clair_Obscur%2C_Expedition_33_Cover_1.webp/250px-Clair_Obscur%2C_Expedition_33_Cover_1.webp.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjI9EJkXthySy3xbn6SOD_rYU5cKBpngsmJw&s",
  ];
  return (
    <div className="h-max w-[342px] ">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-light font-roboto text-lightblue h-10 flex items-center">
          {type.charAt(0).toUpperCase() + type.slice(1).split("-").join(" ")}
        </h1>
        <Button className="h-8 hover:bg-greyblue-200 bg-transparent text-white/50 hover:text-white text-sm font-light cursor-pointer">
          See more
        </Button>
      </div>

      <div className="h-max w-full flex flex-col gap-2">
        {games.map((link, idx) => {
          return (
            <div key={idx} className="h-max w-full flex gap-2">
              <GameCard size={"sm"} className="border-0">
                <img src={link} className="h-full w-full rounded-sm" />
              </GameCard>
              <div className="h-max w-auto flex flex-col gap-1">
                <h1 className="text-white">Game Name</h1>
                <div className="text-zinc-400">date</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
