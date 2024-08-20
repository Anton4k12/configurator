import { Package } from "./package";

export const Packages = ({ packages }) => {
  console.log(packages);
  return (
    <div className="px-3 pt-6">
      <h2>
        <span className="px-7 text-[40px] font-extralight leading-[96px]">
          Packages
        </span>
      </h2>
      <div className="grid grid-cols-2 gap-6 pt-5">
        {packages.map((pack) => {
          return (
            <Package
              name={pack.name}
              imageUrl={pack.imageUrl}
              price={pack.price}
              characteristics={pack.characteristics}
            ></Package>
          );
        })}
      </div>
    </div>
  );
};
