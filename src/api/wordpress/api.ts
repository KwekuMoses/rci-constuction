// "use server"
import 'server-only'
import { cache } from 'react'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
const URL = process.env.NEXT_PUBLIC_URL
const PASSWORD = process.env.NEXT_PUBLIC_LOCAL_PASSWORD
const USERNAME = process.env.NEXT_PUBLIC_USERNAME
// Encode your username and password in base64
const encodedCredentials = Buffer.from(`${USERNAME}:${PASSWORD}`).toString('base64');

export const preloadHomeData = (id: number) => {
    void fetchPageData(id)
}

export const fetchGraphQLData = async (query: string) => {
    const res = await fetch(`${URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${encodedCredentials}`
        },
        body: JSON.stringify({ query }),
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
};

export const fetchHeroData = cache(async (uri: string) => {
    const query = `
    {
        pageBy(uri: "${uri}") {
          home {
            hero {
              fieldGroupName
              subtitle
              tagline
              title
              imageurl {
                sourceUrl
              }
            }
          }
        }
    }`;

    return fetchGraphQLData(query);
});

export const fetchNavigationData = cache(async () => {
    const query = `
    {
        pages {
            nodes {
              title
              slug
              menuOrder
            }
          }
      }`;

    return fetchGraphQLData(query);
});




export const fetchHomePageData = cache(async (uri: string) => {

    const query = `query HomePageData {
        pageBy(uri: "hem") {
          home {
            buttonText
            ctaButtonText
            hero {
              subtitle
              tagline
              title
              imageurl {
                sourceUrl
              }
            }
            introduction {
              text
              title
            }
            logos {
              image1 {
                sourceUrl
              }
              image2 {
                sourceUrl
              }
              image3 {
                sourceUrl
              }
            }
            services {
              title
              cards {
                card1 {
                  image {
                    sourceUrl
                  }
                  text
                  textLink
                  title
                }
                card2 {
                  image {
                    sourceUrl
                  }
                  text
                  textLink
                  title
                }
                card3 {
                  text
                  textLink
                  title
                  image {
                    sourceUrl
                  }
                }
              }
            }
            socialProof {
              company
              person
              quote
              image {
                sourceUrl
              }
            }
            careerNote {
              title
              text
              readMore
            }
            callToAction {
              card1 {
                text
                title
              }
              card2 {
                text
                title
              }
              card3 {
                text
                title
              }
              title
              text
              icon {
                sourceUrl
              }
            }
          }
        }
      }`;

    return fetchGraphQLData(query);
})



export const fetchPageData = cache(async (id: number) => {
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

// export const fetchNavigationData = cache(async () => {
//     const res = await fetch(`${BASE_URL}/navigation`)

//     if (!res.ok) {
//         throw new Error('Failed to fetch data')
//     }

//     return res.json()
// })

export const fetchServicesData = cache(async (id: number) => {
    const res = await fetch(`${BASE_URL}/service/${id}`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
})


export const fetchProjectsData = cache(async (id: number | string) => {
    try {
        const res = await fetch(`${BASE_URL}/project/${id}`);

        if (!res.ok) {
            throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
        }

        return res.json();
    } catch (error) {
        console.error("Error fetching project data:", error);
        // You can also rethrow the error if you want to handle it further up the call stack
        // throw error;
    }
});

