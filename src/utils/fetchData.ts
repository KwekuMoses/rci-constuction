import { cache } from 'react'
import 'server-only'

export const preload = (id: number) => {
    void fetchData(id)
}

export const fetchData = cache(async (id: number) => {
    const res = await fetch(`https://cms.rcibygg.se/wp-json/wp/v2/pages/${id}`)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()

})