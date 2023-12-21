import React from 'react'
import { fetchCareerPageData } from '@/api/wordpress/api'
import Title from '@/components/title/Title'

import Image from 'next/image'

import './page.scss'

const page = async () => {
    const data = await fetchCareerPageData()
    const _data = data.data.pageBy.career.career
    const { title, text, image } = _data

    return (
        <div className="CareerPage">
            <Title title="Karriär" />
            <div className="CareerPage__Container">
                <div className="CareerPage__BoxLeft">
                    <div className="CareerPage__ImageWrapper">
                        <Image src={image.sourceUrl} alt="Career image"
                            fill={true}
                            style={{ objectFit: "cover" }}
                            priority={true}
                            quality={100}
                        />
                    </div>
                </div>
                <div className="CareerPage__BoxRight">
                    <div className="CareerPage__TextWrapper">
                        <h2>{title}</h2>
                        <span className="line"></span>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page