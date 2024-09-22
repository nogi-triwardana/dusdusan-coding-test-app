import { Homebar, Slider } from "@/components/molecules";
import { ArticleSection, BrandSection, CategorySection, ProductSection, PromoSection, Footer } from "@/components/organisms";
import { Layout } from "@/components/templates";
import Image from "next/image";

const categoryNavbarItems = [
  {
    label: 'Promo',
    redirect: '',
  },
  {
    label: 'Kategori',
    redirect: '',
  },
  {
    label: 'Terpilih',
    redirect: '',
  },
  {
    label: 'Terlaris',
    redirect: '',
  },
  {
    label: 'Terpopuler',
    redirect: '',
  },
  {
    label: 'Terbaru',
    redirect: '',
  },
]

export default function Home() {
  return (
    <Layout>
      <Homebar
        items={categoryNavbarItems}
      />
      <Slider />
      <PromoSection />
      <CategorySection />
      <ArticleSection />
      <div>
        <BrandSection />
        <div className="px-5 pt-[5px] pb-[35px]">
          <Image
            src={'/assets/images/example-banner-1.webp'}
            width={'0'}
            height={'0'}
            sizes="100vw"
            className="w-full h-auto rounded-[8px]"
            alt=""
          />
        </div>
        <ProductSection 
          title="Produk Terlaris"
          titleColor={'text-white'}
          bgColor={'bg-[linear-gradient(221deg,#2fddd9,#15b8b2)]'}
        />
        <ProductSection 
          title="Produk Terpopuler"
          titleColor={'text-black'}
          bgColor={'bg-white'}
        />
        <ProductSection 
          title="Produk Terbaru"
          titleColor={'text-black'}
          bgColor={'bg-white'}
        />
        <Footer />
      </div>
    </Layout>
  );
}
