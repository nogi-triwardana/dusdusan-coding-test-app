import { Input } from "@/components/atoms";
import { Button } from "@/components/atoms";
import Image from "next/image";

import { IoSearchSharp } from "react-icons/io5";

const Header = () => {
  return (
    <header className="flex flex-col gap-4 p-4 w-full bg-white sticky top-0 z-[90]">
      <div className="flex justify-between w-full">
        <Image
          src={'/assets/images/logo.webp'}
          width={120}
          height={32}
          alt="Dusdusan.com"
        />
        <div className="flex gap-2">
          <Button
            className="text-[#ffad00] w-[68px] bg-white border border-[#ffad00]"
          >
            Masuk
          </Button>
          <Button
            className="bg-[#ffad00] w-[68px] text-white border border-[#ffad00]"
          >
            Daftar
          </Button>
        </div>
      </div>
      <div>
        <Input 
          placeholder={'Cari barang kamu disini...'}
          startIcon={<IoSearchSharp />}
        />
      </div>
    </header>
  );
};

export default Header;