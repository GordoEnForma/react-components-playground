import { InfluencerCard } from "./components/influencer-card/InfluencerCard";
import { data } from "./components/influencer-card/data";

function App() {
  return (
    <div className="flex mt-24 w-size min-h-screen bg-red-200">
      <div className="hidden w-2/5 lg:block">
        <h1>aea</h1>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 ">
        {data.map((item, index) => {
          return <InfluencerCard key={index} influencer={item} />;
        })}
      </div>
    </div>
  );
}

export default App;
