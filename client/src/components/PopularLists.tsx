"use client";
import { GameCard } from "./GameCard";

export default function PopularLists() {
  return (
    <div className="h-max w-full">
      <h1 className="text-lg font-light font-roboto text-lightblue h-10 flex items-center">
        Popular Lists
      </h1>
      <div className="h-max w-full flex items-center justify-between">
        {[1, 2, 3].map((i) => {
          return <List key={i} />;
        })}
      </div>
    </div>
  );
}

function List() {
  const games = [
    "https://image.api.playstation.com/vulcan/ap/rnd/202212/2009/04S9doVJzhHa0OE8o8wax88S.png",
    "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/60eca3ac155247e21850c7d075d01ebf0f3f5dbf19ccd2a1.jpg",
    "https://static0.thegamerimages.com/wordpress/wp-content/uploads/sharedimages/2024/12/mixcollage-08-dec-2024-01-48-pm-7604.jpg",
    "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Clair_Obscur%2C_Expedition_33_Cover_1.webp/250px-Clair_Obscur%2C_Expedition_33_Cover_1.webp.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjI9EJkXthySy3xbn6SOD_rYU5cKBpngsmJw&s",
  ];
  return (
    <div className="h-max w-max">
      <div className="h-[155px] flex relative w-full">
        {games.map((game, idx) => {
          console.log((games.length - (idx + 1)) * 10);
          return (
            <GameCard
              size={"lg"}
              key={idx}
              className="absolute shadow-[5px_0_10px_0_rgba(0,0,0,0.5)] border-lightblue "
              style={{
                zIndex: `${games.length - idx}`,
                marginLeft: `${idx * 57}px`,
              }}
            >
              <img
                src={game}
                className="h-full w-full object-center object-cover rounded-sm"
              />
            </GameCard>
          );
        })}
      </div>
      <div className="w-[342px] h-max text-white text-lg">
        Upcoming games 2025, List of upcoming games 2025
      </div>
      <div className="h-8 w-[342px] text-zinc-400 flex items-center text-sm gap-1">
        by <span className="text-white">Username</span> | 21 games
      </div>
    </div>
  );
}
