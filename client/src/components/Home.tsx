import Footer from "./Footer";
import Listings from "./Listings";
import Navbar from "./Navbar";
import PopularLists from "./PopularLists";
import PopularReviews from "./PopularReviews";
import Trending from "./Trending";

export default function Home() {
  return (
    <div className="h-full w-full space-y-5">
      <Trending />
      <PopularReviews />
      <PopularLists />
      <Listings />
      <Footer />
    </div>
  );
}
