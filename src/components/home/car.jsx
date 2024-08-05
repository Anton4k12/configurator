export const Car = ({ name, imageUrl }) => {
  return (
    <div>
      <div>{name}</div>
      <img src={imageUrl} />
    </div>
  );
};
