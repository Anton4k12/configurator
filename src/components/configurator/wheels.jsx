export const Wheels = ({ wheels }) => {
  return (
    <div>
      <div className="text-[40px] font-extralight">Wheels</div>

      <div aria-label="wheels">
        {wheels.map((wheel) => {
          return (
            <div key={wheel.name}>
              <div>
                {wheel.diameter} {wheel.name}
              </div>
              <img src={wheel.imageUrl} />
              <div></div>
              <div></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
