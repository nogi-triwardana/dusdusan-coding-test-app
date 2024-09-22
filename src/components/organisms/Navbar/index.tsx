import Image from "next/image";
import { cloneElement } from "react";
import { IoMdHome } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";

const menus = [
  {
    redirect: '',
    icon: <IoMdHome />,
    title: 'Beranda',
  },
  {
    redirect: '',
    icon: <MdFavoriteBorder />,
    title: 'Favorit',
  },
  {
    redirect: '',
    icon: '/assets/icons/catalog.svg',
    title: 'Katalog',
  },
  {
    redirect: '',
    icon: <MdShoppingCart />,
    title: 'Keranjang',
  },
  {
    redirect: '',
    icon: '/assets/icons/profile.svg',
    title: 'Profil',
  },
];

const Navbar = () => {
  return (
    <nav className="bg-[#01b0b9] bottom-0 sticky z-[1000] shadow-[0_-2px_2px_0px_rgba(0,0,0,0.3)]">
      <div className="flex justify-between w-full p-[15px] text-white">
        {menus.map((menu, key) => (
          <div 
            key={'menu-nav-' + key}
            className="flex flex-col w-[40px] h-[40px] items-center justify-end"
          >
            {typeof menu.icon === "string" ? (
              menu.title !== 'Katalog' ? (
                <Image
                  src={menu.icon}
                  width={20}
                  height={20}
                  alt={''}
                />
              ) : (
                <div className="flex items-center justify-center relative -mt-[40px] rounded-full p-[10px] bg-[#ffad00] shadow-md w-[55px] h-[55px]">
                  <Image
                    src={menu.icon}
                    width={36}
                    height={36}
                    alt={''}
                    className="mx-auto"
                  />
                </div>
              )
            ) : (
              cloneElement(
                menu.icon,
                {
                  className: 'text-xl'
                },
                'menu-nav-icon-' + key
              )
            )}
            <div className="text-xs font-bold">
              {menu.title}
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;