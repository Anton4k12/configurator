import { Link, useParams } from "react-router-dom";
import { MaseratiLogo } from "../icons/maserati-logo";
import ReactLogo from "../icons/react-logo";

export const Footer = ({ modelName, subModel }) => {
  return (
    <div className="relative bg-black pb-40">
      {/* <Link to={`/${modelName}/${subModel.name}/test`}> */}
      <div className="flex items-center">
        <div className="flex w-full justify-center bg-black py-6">
          <MaseratiLogo color="#FFFFFF"></MaseratiLogo>
        </div>

        <div className="absolute right-10 flex items-center gap-1 bg-black text-zinc-300">
          made by{" "}
          <a target="_blank" href="https://github.com/Anton4k12">
            Anton4k12
          </a>
          <a
            target="_blank"
            href="https://github.com/Anton4k12"
            className="fill-white pl-4"
          >
            <ReactLogo></ReactLogo>
          </a>
        </div>
      </div>
      {/* </Link> */}
      <hr className="border-white" />
    </div>
  );
};
