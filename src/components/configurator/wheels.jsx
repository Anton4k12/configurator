export const Wheels = ({ wheels }) => {
  return (
    <div>
      <div className="text-[40px] font-extralight">Wheels</div>

      <div aria-label="wheels">
        {wheels.map((wheel) => {
          return (
            <div key={wheel.name}>
              <div className="pb-2 text-[11px] uppercase tracking-wide text-[rgb(102,102,102)]">
                {wheel.diameter} {wheel.name} $ {wheel.price}
              </div>
              <img src={wheel.imageUrl} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
