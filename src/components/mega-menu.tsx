import Image from "next/image";
import Link from "next/link";
import React from "react";

const MegaMenu = ({ setMegaMenu, categories }: any) => {  

  return (
    <div className="container mx-auto bg-white md:shadow-[0_7px_10px_-2px_rgba(0,0,0,0.25)] md:px-7 pt-4">
      <div className="md:hidden flex flex-col gap-5">
        {[0, 1, 2, 3, 4, 5]?.map((item: any, idx: number) => {
          return (
            <Link
              key={idx}
              href={`${item?.link}`}
              className="text-base font-normal text-title_Clr hover:text-secondary"
            >
              Apparel
            </Link>
          );
        })}
      </div>
      <div className="md:grid md:grid-cols-3 gap-7 py-6 hidden">
        <div className="md:col-span-2">
          <h3 className="text-base font-bold text-title_Clr">
            Shop by Industries
          </h3>
          <ul className="grid grid-cols-3 gap-5 mt-6 grid-flow-row">
            {categories?.map(
              (item: any, idx: number) => {
                return (
                  <li
                    onClick={() => setMegaMenu(false)}
                    key={idx}
                    className="bg-transparent hover:bg-[#F7F7F7] py-4 px-2 rounded-md w-full"
                  >
                    <Link
                      href={`${item?.slug.current}`}
                      className="text-base font-medium text-title_Clr flex items-center gap-4"
                    >
                      <div>
                        <Image
                          src={item.icon.asset.url}
                          alt="delivery"
                          width={40}    
                          height={40}
                        />
                      </div>
                      <span> {item?.name} Apparel</span>
                    </Link>
                  </li>
                );
              }
            )}
            <li
              onClick={() => setMegaMenu(false)}
              className="bg-transparent hover:bg-[#F7F7F7] py-4 px-2 rounded-md w-full"
            >
              <Link
                href={`/categories`}
                className="text-base font-medium text-title_Clr flex items-center gap-4"
              >
                <div>
                  <Image
                    src="/images/delivery.png"
                    alt="delivery"
                    width={40}
                    height={40}
                  />
                </div>
                <span>See all industries</span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Image
            src="/images/design/1.png"
            alt="feature"
            width={306}
            height={338}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
