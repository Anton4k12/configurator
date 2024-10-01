import { Link, useParams } from "react-router-dom";
import { MaseratiLogo } from "../icons/maserati-logo";

export const Footer = ({ modelName, subModel }) => {
  return (
    <div className="hidden lg:block">
      <Link to={`/${modelName}/${subModel.name}/test`}>
        <div className="flex w-full justify-center bg-black py-6">
          <MaseratiLogo color="#FFFFFF"></MaseratiLogo>
        </div>
      </Link>
      <hr className="border-white" />
      <div className="bg-black pb-40 text-white">
        made by{" "}
        <a target="_blank" href="https://github.com/Anton4k12">
          Anton4k12
        </a>
      </div>
    </div>
  );
};
