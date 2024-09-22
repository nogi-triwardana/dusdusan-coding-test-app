import { Header, Navbar } from "@/components/organisms";

const Layout = ({
  children,
}: TLayoutProps) => {
  return (
    <div className="w-full max-w-[480px] mx-auto bg-white relative">
      <Header />
      {children}
      <Navbar />
    </div>
  );
};

export default Layout;