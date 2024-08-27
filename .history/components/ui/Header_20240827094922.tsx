import Image from "next/image";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <Image  />
      <p>logo</p>
      <p>links</p>
    </div>
  );
};

export default Header;
