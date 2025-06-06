import Review from "./Review";
import { Button } from "./ui/button";

export default function PopularReviews() {
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
        <Review />
      </div>
    </div>
  );
}
