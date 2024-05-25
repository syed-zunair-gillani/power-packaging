import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function DesignBox({ title, img, slug }: any) {
    return (
        <Link href={`/${slug?.current}`}>
            <div className=''>
                <Image src={img} alt='pack/1' width={306} height={340} className='mx-auto cursor-pointer mb-4' />
            </div>
            <div className='block mx-auto md:text-lg text-base font-semibold text-title_Clr text-center'>
                {title}
            </div>
        </Link>
    )
}

export default DesignBox