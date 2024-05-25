import React from "react";
import { client } from "../../../sanity/lib/client";
import { Qproducts } from "../../../sanity/queries";
import Packing_Design from "@/components/home/packing-design";
import DesignBox from "@/components/home/designBox";
import { urlForImage } from "../../../sanity/lib/image";
import Link from "next/link";
import PageBanner from "@/components/page-banner";
import useProductsByCategory from '../../../hooks/useProductsByCategory.jsx'

const Products = ({ productsRes }: any) => {

  const formattedData = useProductsByCategory(productsRes);

  return (
    <>
      <PageBanner
        title="All Products"
        content="Choose a packaging style for your custom boxes, start designing with us, and get your boxes with the most advanced printing techniques."
      />
      {
        formattedData.map((item,idx)=>(
          <section key={idx} className={`py-10 mb-6 ${idx%2 !== 0 && 'bg-gray-50'}`}>
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center gap-5">
              <h2 className="md:text-2xl text-2xl font-semibold text-title_Clr">
                {item.categoryName}
              </h2>
              <Link
                href={item.categorySlug}
                className="bg-primary hover:bg-secondary md:px-8 px-6 md:py-4 py-2 text-sm font-semibold text-white rounded-[5px]"
              >
                View All
              </Link>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7 mt-6">
              {item?.products?.map((product: any, i: number) => (
                <DesignBox
                  key={i}
                  title={product.title}
                  slug={product.slug}
                  img={urlForImage(product?.image.asset._ref).width(306).url()}
                />
              ))}
            </div>
          </div>
        </section>
        ))
      }
     
    </>
  );
};

export default Products;

export async function getServerSideProps() {
  const productsRes = await client.fetch(Qproducts);
  return {
    props: {
      productsRes,
      preview: true,
    },
  };
}
