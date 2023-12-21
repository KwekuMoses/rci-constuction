
import { Poppins } from 'next/font/google'
import { DM_Sans } from 'next/font/google'

export const poppins = Poppins({
    weight: '700',
    subsets: ['latin'],
})

export const dm_sans_bold = DM_Sans({
    weight: '900',
    subsets: ['latin'],
})
export const dm_sans_thin = DM_Sans({
    weight: '300',
    subsets: ['latin'],
})
export const dm_sans_buttons = DM_Sans({
    weight: '500',
    subsets: ['latin'],
})
