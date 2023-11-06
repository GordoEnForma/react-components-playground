import { Influencer } from "./data";
import { FaTiktok, FaInstagram } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { formatAmmountBy } from "../../utils/formatters";
export const InfluencerCard = ({ influencer }: { influencer: Influencer }) => {
  console.log(influencer);
  return (
    <div className="flex w-80 flex-col bg-base-100 rounded-2xl">
      <h1 className="my-5 text-xl text-center  font-bold">{influencer.name}</h1>
      <div className="flex lg:flex-col items-center justify-around bg-base-100 shadow-xl">
        {/* <h2 className="card-title">{influencer.name}</h2> */}
        <div className="flex flex-col items-center">
          <figure>
            <img
              className="rounded-full"
              loading="lazy"
              src={influencer.profilePhotoUrl}
              alt="Movie"
            />
          </figure>
          <div className="text-center">
            {influencer.interests.map((interest, index) => {
              return (
                <span key={index} className="text-sm ">
                  {interest}
                  {index !== influencer.interests.length - 1 && ", "}
                </span>
              );
            })}
          </div>
        </div>
        {/* <h2>aea</h2> */}
        <div className="flex-col">
          <div className="flex flex-col items-center mt-4">
            <div className="flex flex-col">
              <div className="flex flex-col gap-4">
                <div className="flex items-center font-semibold justify-center gap-2 w-36 bg-slate-200 px-2 py-1 rounded-lg">
                  <GrLocation size={18} className="self.href-center" />
                  <span className="text-sm text-gray-900 ">
                    {influencer.region}
                  </span>
                </div>
                <div className="flex justify-center bg-slate-200 px-2 py-1 rounded-lg">
                  <span className="text-sm text-gray-900 font-semibold">
                    PEN {influencer.referencePrice} +
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-around ">
            {influencer.socialMedia.map((socialMedia) => {
              {
                return (
                  <div
                    key={socialMedia.username}
                    className="flex flex-col justify-center items-center  space-x-2 "
                  >
                    {socialMedia.socialMedia === "Instagram" ? (
                      <FaInstagram size={18} />
                    ) : (
                      <FaTiktok size={18} />
                    )}
                    <p className="text-sm font-semibold text-white">
                      {formatAmmountBy(socialMedia?.followers)}
                    </p>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center my-4">
        <button className="btn btn-primary w-1/3 text-sm capitalize p-0">
          Contactar
        </button>
      </div>
    </div>
  );
};
