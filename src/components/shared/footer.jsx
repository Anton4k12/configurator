import { MaseratiLogo } from "../icons/maserati-logo";

export const Footer = () => {
  return (
    <div>
      <div className="flex w-full justify-center bg-black py-6">
        <MaseratiLogo color="#FFFFFF"></MaseratiLogo>
      </div>
      <hr className="border-white" />
      <div className="bg-black py-20"></div>
    </div>
  );
};
