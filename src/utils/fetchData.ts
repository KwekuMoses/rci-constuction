import { cache } from 'react'
import 'server-only'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

export const preloadHomeData = (id: number) => {
    void fetchHomeData(id)
}


export const fetchHomeData = cache(async (id: number) => {
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
    const res = await fetch(`${BASE_URL}/service`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()

})

export const fetchNavigationData = cache(async () => {
    const res = await fetch(`${BASE_URL}/navigation`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
})

export const fetchServicesData = cache(async (id: number) => {
    const res = await fetch(`${BASE_URL}/service/${id}`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
})

export const fetchProjectsData = cache(async () => {
    const res = await fetch(`${BASE_URL}/project`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
})

