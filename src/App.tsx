// import { Glow } from "./components/glow/Glow";
import { InfluencerCard } from "./components/influencer-card/InfluencerCard";
import { data } from "./components/influencer-card/data";

function App() {
  return (
    <div>
      <div className="w-ful">
        <h1>Flupic</h1>
      </div>
      <div className="flex lg:space-x-10 mt-24 mb-24 w-size min-h-screen bg-black ">
        <div className="hidden md:w-1/3 lg:block">
          <h1></h1>
        </div>
        <div className="flex flex-col w-full">
          <h1 className="text-center text-5xl text-slate-200 font-bold mt-10">
            Influencers
          </h1>
          <div className="flex w-full mt-10 mb-10 flex-wrap items-center justify-center gap-10">
            {data.map((item, index) => {
              return <InfluencerCard key={index} influencer={item} />;
            })}
          </div>
        </div>
      </div>
      {/* <Glow /> */}
    </div>
  );
}

export default App;
