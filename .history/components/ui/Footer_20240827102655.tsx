import Image from "next/image";
import { links } from "./Header";
import Link from "next/link";
import moment from "moment";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

const socialLinks = [
  {
    id: 1,
    name: "instagram",
    url: "https://www.instagram.com/namsewalbakery/",
    icon: <FaInstagram />,
  },
  {
    id: 2,
    name: "facebook",
    url: "https://www.facebook.com/namsewalbakery/",
    icon: <FaFacebook />,
  },
];

const Footer = () => {
  return (
    <div className="relative flex flex-row justify-around bg-[#bae8d4] px-32 py-8">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center gap-2">
          <Image
            src="/assets/logo.jpg"
            alt="namsewal bakery"
            width={128}
            height={128}
            className="size-32 rounded-full"
          />
          <p className="text-2xl">Namsewal Bakery</p>
        </div>
        <div className="flex flex-col gap-2 text-lg">
          {links?.map((link) => (
            <Link key={link.id} href={link.href} className="hover:underline">
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p>Connect with us at</p>
        <div  >
          {socialLinks?.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="flex flex-row items-center gap-2 hover:underline"
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 p-4">
        <p className="text-sm">
          © {moment().format("YYYY")} Namsewal Bakery. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
