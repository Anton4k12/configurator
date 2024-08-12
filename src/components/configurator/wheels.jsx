export const Wheels = ({ wheels }) => {
  return (
    <div>
      <div className="text-[40px] font-extralight">Wheels</div>

      <div>20"/21" Pegaso Design Glossy Black Finishing Forged</div>

      <div aria-label="wheels">
        {wheels.map((wheel) => {
          return (
            <div key={wheel.name}>
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
