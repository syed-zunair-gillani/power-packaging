import React from 'react'
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';
import Link from 'next/link';

const Featured_Posts = () => {

    return (
        <div className='shadow-[0px_8px_5px_0px_rgb(23,43,77,8%)] hover:shadow-[0px_3px_2px_0px_rgb(23,43,77,8%)] rounded-lg'>
            <div>
                <Image src="/images/make-product.png" alt='make-product' width={793} height={472} className='w-full h-full object-cover rounded-t-lg' />
            </div>
            <div className='py-4'>
                <Link href="#" className='md:text-2xl text-base font-medium text-title_Clr text-center block w-fit mx-auto'>
                    Lorem ipsum dolor sit amet
                </Link>
                <p className='md:text-base text-sm font-medium text-txt_Clr text-center'>
                    2 comments . DEC 19, 2024
                </p>
            </div>
        </div>
    )
}

export default Featured_Posts