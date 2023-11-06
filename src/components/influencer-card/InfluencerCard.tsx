import { Influencer } from "./data";
import { FaTiktok, FaInstagram} from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import {FaRegCheckCircle} from 'react-icons/fa';
import { formatAmmountBy } from "../../utils/formatters";
export const InfluencerCard = ({ influencer }: { influencer: Influencer }) => {
  return (
    <div className="flex w-80 flex-col bg-slate-800 rounded-2xl border-base-100 border-4 hover:border-yellow-100 hover:border-4">
      <h1 className="text-3xl mt-5 text-center font-bold text-yellow-100">
        {influencer.name}
      </h1>
      <div className="mb-4 text-center">
        {influencer.interests.map((interest, index) => {
          return (
            <span key={index} className="text-sm  text-white ">
              {interest}
              {index !== influencer.interests.length - 1 && ", "}
            </span>
          );
        })}
      </div>
      <div className="flex lg:flex-col justify-around bg-slate-800 shadow-xl">
        <div className="flex flex-col relative items-center lg:mb-8 ">
          <figure className="">
            <img
              className="rounded-full lg:relative border-yellow-50 border-2 lg:h-[236px] lg:w-[236px] w-[120px] h-[120px]"
              loading="lazy"
              src={influencer.profilePhotoUrl}
              alt="Movie"
              height={100}
              width={100}
            />
          </figure>
          {influencer.exchange ? (
            // <div className="badge bg-yellow-200 mt-1 lg:absolute lg:bottom-0 text-black ">Canje</div>
            <div className="badge lg:badge-lg absolute bottom-[15px] lg:bottom-[-10px] bg-yellow-200 mt-1  text-black ">
              <FaRegCheckCircle size={18} className="text-black mr-1" />
              <span className="text-black text-center  font-semibold">
                Canje
              </span>
            </div>
          ) : null}
        </div>
        <div className="flex flex-col items-center gap-4 mt-2 lg:mt-0">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="inline-flex min-w-[100px]  items-center font-semibold justify-center gap-1 bg-slate-200 px-2 py-1  rounded-lg">
              <GrLocation size={18} className="text-black mt-[2px] mr-1" />
              <span className="text-base text-gray-900 ">
                {influencer.region}
              </span>
            </div>
            <div className="flex text-center items-center justify-center bg-slate-200 px-2 rounded-lg">
              <span className="text-2xl text-gray-900 font-bold  -mt-[4.5px] lg:mr-0 ">
                +
              </span>
              <span className="text-xl text-gray-900 font-semibold">
                {influencer.referencePrice}
              </span>
              <span className="text-base lg:ml-0.5 mt-[1.5px] text-gray-500 font-bold">
                PEN
              </span>
            </div>
          </div>
          <div className="flex mt-4 gap-5 mb-3 ">
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
        <button className="bg-yellow-300 w-1/3 text-sm lg:text-xl capitalize p-1  rounded-xl text-black font-semibold ">
          Contactar
        </button>
      </div>
    </div>
  );
};
