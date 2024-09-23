import { Header, Navbar } from "@/components/organisms";

const Layout = ({
  children,
}: TLayoutProps) => {
  return (
    <div className="w-full max-w-[480px] mx-auto bg-white relative shadow-[0_0_15px_1px_rgba(0,0,0,.1)]">
      <Header />
      {children}
      <Navbar />
    </div>
  );
};

export default Layout;