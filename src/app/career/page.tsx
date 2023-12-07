import React from 'react'
import { fetchPageData } from '@/utils/fetchData'
import Title from '@/components/Title/Title'

import Image from 'next/image'

import './page.scss'

const page = async () => {
    const careerPageData = await fetchPageData(9)
    console.log(careerPageData.acf.career)
    const title = careerPageData.acf.career.title
    const text = careerPageData.acf.career.text
    const imageUrl = careerPageData.acf.career.image
    return (
        <div className="CareerPage">
            <Title title="Karriär"></Title>
            <div className="CareerPage__Container">
                <div className="CareerPage__BoxLeft">
                    <div className="CareerPage__ImageWrapper">
                        <Image src={imageUrl} alt="Career image"
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