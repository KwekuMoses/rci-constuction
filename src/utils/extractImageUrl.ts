// Function to extract image URL from HTML string
export const extractImageUrl = (htmlString: string) => {
    const imgRegex = /<img.*?src="(.*?)"/;
    const match = htmlString.match(imgRegex);
    return match ? match[1] : null;
};
