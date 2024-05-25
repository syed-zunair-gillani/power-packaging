import PageBanner from '@/components/page-banner'
import Link from 'next/link'
import React from 'react'
import Featured_Posts from '@/components/blog/featured-post'
import Image from 'next/image'
import { client } from '../../../sanity/lib/client'
import { Qblogs } from '../../../sanity/queries'

export default function Blogs({blogs}:any) {
    console.log("🚀 ~ Blogs ~ blogs:", blogs)
    return (
        <>
            <PageBanner title="Blogs" />
            <section className='md:py-16 py-8'>
                <div className='container mx-auto px-4 flex md:flex-row flex-col gap-7 md:divide-x divide-txt_Clr/50'>
                    <div className='md:w-2/3 w-full'>
                        <h2 className='md:text-4xl text-xl font-semibold text-title_Clr mb-5'>
                            All Posts
                        </h2>
                        <div className='grid md:grid-cols-2 grid-cols-1 gap-7'>
                            {[0, 1, 2, 3].map(({ item, idx }: any) => {
                                return (
                                    <Featured_Posts key={idx} />
                                )
                            })}
                        </div>
                    </div>
                    <div className='md:w-1/3 w-full md:pl-7 md:block block'>
                        <h2 className='md:text-3xl text-xl font-semibold text-title_Clr mb-5'>
                            Latest posts
                        </h2>
                        <div className='grid gap-7'>
                            {[0, 1, 2, 3].map(({ item, idx }: any) => {
                                return (
                                    <div key={idx} className='flex md:flex-row flex-row gap-2 shadow-[0px_8px_5px_0px_rgb(23,43,77,8%)] hover:shadow-[0px_3px_2px_0px_rgb(23,43,77,8%)] rounded'>
                                        <div>
                                            <Image src="/images/make-product.png" alt='make-product' width={144} height={89} className='h-full w-full object-cover rounded-l' />
                                        </div>
                                        <div className='py-4'>
                                            <Link href="#" className='md:text-xl text-base font-medium text-title_Clr block w-fit'>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            </Link>
                                            <p className='md:text-base text-sm font-medium text-txt_Clr mt-1.5'>
                                                DEC 19, 2024
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}




export async function getServerSideProps() {
    const blogs = await client.fetch(Qblogs);
    return {
      props: {
        blogs,
        preview: true
      }
    };
  }