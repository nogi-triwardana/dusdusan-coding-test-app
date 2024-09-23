"use client"

import { Homebar, Slider } from "@/components/molecules";
import { ArticleSection, BrandSection, CategorySection, ProductSection, PromoSection, Footer, BannerSection } from "@/components/organisms";
import { Layout } from "@/components/templates";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { getArticles } from "@/lib/slices/articles";
import { getPromoBanner } from "@/lib/slices/banners";
import { getHomePageContent } from "@/lib/slices/home";
import { getListProduct, getProductBrand, getTrendingProductCategory } from "@/lib/slices/products";
import Image from "next/image";
import { useEffect } from "react";
import { SwiperSlide } from "swiper/react";

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
  const dispatch = useAppDispatch();
  const homePageContent: any = useAppSelector(state => state.home.data);
  const bannerPromo: any = useAppSelector(state => state.banner.data);
  const { trendingProductCategory, productBrand, products }: any = useAppSelector(state => state.product);
  const article: any = useAppSelector(state => state.article);

  useEffect(() => {
    dispatch(getHomePageContent());
    dispatch(getPromoBanner());
    dispatch(getTrendingProductCategory({ limit: 0 }));
    dispatch(getArticles({ limit: 5, orderby: 'publishDate', sortby: 'desc' }));
    dispatch(getProductBrand({ sortby: 'position', limit: 5 }));
    dispatch(getListProduct({ offset: 0, limit: 10, query2: 'type_product__in:1-4', query: '' }));
  }, []);

  return (
    <Layout>
      <Homebar
        items={categoryNavbarItems}
      />
      <Slider>
        {homePageContent?.banner?.memberNonReseller?.map((item: any, key: any) => (
          <SwiperSlide key={"slider-" + key}>
            <Image
              src={item.image}
              width={480}
              height={480}
              alt={''}
            />
          </SwiperSlide>
        ))}
      </Slider>
      <PromoSection 
        items={bannerPromo?.data}
      />
      <CategorySection 
        categories={trendingProductCategory?.data}
      />
      <ArticleSection 
        items={article?.data}
      />
      <div>
        <BrandSection 
          items={productBrand}
        />
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
          products={homePageContent?.product?.productByNumberOfSales}
        />
        <ProductSection 
          title="Produk Terpopuler"
          titleColor={'text-black'}
          bgColor={'bg-white'}
          products={homePageContent?.product?.trendingProduct}
        />
        <ProductSection 
          title="Produk Terbaru"
          titleColor={'text-black'}
          bgColor={'bg-white'}
          products={products}
        />
        <BannerSection />
        <Footer />
      </div>
    </Layout>
  );
}
