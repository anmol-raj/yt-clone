import Button from "./Button";

const list = ["All", "Live", "Gaming"];

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Live" />
      <Button name="Gaming" />
      <Button name="Music" />
      <Button name="Comedy" />
      <Button name="Cooking" />
    </div>
  );
};

export default ButtonList;
