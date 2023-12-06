import { cache } from 'react'
import 'server-only'



export const preloadHomeData = (id: number) => {
    void fetchHomeData(id)
}


export const fetchHomeData = cache(async (id: number) => {
    let BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
    const res = await fetch(`${BASE_URL}/pages/${id}`)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()

})

export const fetchServiceData = cache(async () => {
    let BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
    const res = await fetch(`${BASE_URL}/service`)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()

})