import { Link, useParams } from "react-router-dom";
import { MaseratiLogo } from "../icons/maserati-logo";

export const Footer = ({ modelName, subModel }) => {
  return (
    <div>
      <Link to={`/${modelName}/${subModel.name}/test`}>
        <div className="flex w-full justify-center bg-black py-6">
          <MaseratiLogo color="#FFFFFF"></MaseratiLogo>
        </div>
      </Link>
      <hr className="border-white" />
      <div>made by https://github.com/Anton4k12</div>
      <div className="bg-black py-20"></div>
    </div>
  );
};
