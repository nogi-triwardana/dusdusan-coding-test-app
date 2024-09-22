import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

const socialMediaItems = [
  {
    redirect: '',
    icon: <FaInstagram />,
  },
  {
    redirect: '',
    icon: <FaFacebookF />,
  },
  {
    redirect: '',
    icon: <FaTiktok />,
  },
  {
    redirect: '',
    icon: <FaPlay />,
  },
];

const Footer = () => {
  return (
    <footer className="flex flex-col gap-6 text-white bg-[#00b0b9] w-full p-[28px]">
      <div>
        <div className="font-medium text-lg">
          Dusdusan.com
        </div>
        <div>
          Kami Ada di
          <br />
          Senin - Minggu : 08.00 - 17.00 WIB
        </div>
      </div>
      <div>
        <div className="font-medium">
          Butuh Bantuan ?
        </div>
        <div>
          Live Chat Dusdusan.com
        </div>
        <a href="mailto: support@dusdusan.com">
          Support@dusdusan.com
        </a>
      </div>
      <div className="flex justify-center gap-4 w-full">
        {socialMediaItems.map((item, key) => (
          <div
            key={'social-media-' + key}
            className="text-[#00b0b9] bg-white rounded-full w-[36px] h-[36px] flex justify-center items-center text-xl"
          >
            {item.icon}
          </div>
        ))}
      </div>
      <div className="text-center leading-[20px] text-sm">
        <div className="">PT DUSDUSAN DOTCOM INDONESIA</div>
        <div>
          Jl. Kebon Jeruk Raya 1A, 1B, 1C, Kel. Kebon Jeruk, Kec. Kebon Jeruk, Kota Adm. Jakarta Barat, Prov. DKI Jakarta
        </div>
      </div>
      <div className="text-center text-sm">
        <div>Copyright &copy; 2022 Dusdusan.com. All Rights Reserved</div>
      </div>
    </footer>
  );
};

export default Footer;