import { Influencer } from "./data";
import { FaTiktok, FaInstagram } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { formatAmmountBy } from "../../utils/formatters";

export const InfluencerCard = ({ influencer }: { influencer: Influencer }) => {
  return (
    <div className="flex w-[22rem] flex-col bg-black rounded-2xl border-base-100 border-4 hover:border-yellow-100 hover:border-4">
      <h1 className="text-3xl mt-5 text-center font-bold text-yellow-100">
        {influencer.name}
      </h1>
      <div className="mb-4 text-center">
        {influencer.interests.map((interest, index) => {
          return (
            <span key={index} className="text-sm text-white font-bold ">
              {interest}
              {index !== influencer.interests.length - 1 && ", "}
            </span>
          );
        })}
      </div>
      <div className="flex lg:flex-col justify-around bg-black shadow-xl">
        <div className="flex flex-col relative items-center justify-center lg:mb-8 ">
          <div className="bg-gradient-to-r from-amber-500 to-fuchsia-700 p-1 rounded-full">
            <figure className="bg-black p-1 rounded-full">
              <img
                className="rounded-full "
                loading="lazy"
                src={influencer.profilePhotoUrl}
                alt="Movie"
                height={120}
                width={120}
              />
            </figure>
          </div>
          {/* {influencer.exchange ? (
            // <div className="badge bg-yellow-200 mt-1 lg:absolute lg:bottom-0 text-black ">Canje</div>
            <div className="badge lg:badge-lg absolute bottom-[15px] lg:bottom-[-10px] bg-green-400 mt-1  text-black ">
              <FaRegCheckCircle size={18} className="text-black mr-1" />
              <span className="text-black text-center  font-semibold">
                Acepta Canje
              </span>
            </div>
          ) : null} */}
        </div>
        <div className="flex flex-col items-center gap-4 mt-2 lg:mt-0">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="inline-flex min-w-[130px]  items-center border-2 border-yellow-100 font-semibold justify-center gap-1 px-3 py-2  rounded-lg">
              <FaMapMarkerAlt
                size={18}
                className="text-yellow-200 mt-[2px] mr-1"
              />
              <span className="text-base text-yellow-100 ">
                {influencer.region}
              </span>
            </div>
            <div className="flex self-center text-center min-w-[80px] max-w-[120px] items-center justify-center border-2 border-yellow-100 px-2 py-1 rounded-lg">
              <span className="text-sm text-yellow-100 font-semibold mr-1">
                S/
              </span>
              <span className="text-lg text-yellow-100   font-semibold mr-1">
                {influencer.referencePrice}
              </span>
              <span className="text-base lg:text-2xl text-yellow-200 font-bold -mt-[1.9px]  lg:-mt-[3.3px] lg:mr-0 ">
                +
              </span>
            </div>
          </div>
          <div className="flex mt-2 gap-5 mb-3 ">
            {influencer.socialMedia.map((socialMedia) => {
              {
                return (
                  <div
                    key={socialMedia.username + socialMedia.socialMedia}
                    className="flex flex-col justify-center items-center   "
                  >
                    {socialMedia.socialMedia === "Instagram" ? (
                      <FaInstagram size={18} className="text-yellow-100" />
                    ) : (
                      <FaTiktok size={18} className="text-yellow-100" />
                    )}
                    <p className="text-sm font-semibold lg:text-xl  text-white">
                      {formatAmmountBy(socialMedia?.followers)}
                    </p>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center my-6 ">
        <button className="border-yellow-200 border-2 text-yellow-200 px-8 py-1 text-sm lg:text-xl capitalize  text-center hover:bg-yellow-200 hover:text-black  rounded-xl  font-semibold ">
          Contactar
        </button>
      </div>
    </div>
  );
};
