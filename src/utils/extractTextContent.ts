
export const extractTextContent = (htmlString: string) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlString;
    return tempDiv.textContent || tempDiv.innerText || '';
};

export const parseHtmlContent = (htmlString: string) => {
    console.log(htmlString)
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');

    const h1 = doc.querySelector('h1');
    const h2 = doc.querySelector('h2');
    const h3 = doc.querySelector('h3');
    const p = doc.querySelector('p');
    const pDescriptionHome = doc.querySelector('p.description-home');

    return {
        h1Content: h1 ? h1.textContent : '',
        h2Content: h2 ? h2.textContent : '',
        h3Content: h3 ? h3.textContent : '',
        pContent: p ? p.textContent : '',
        pDescriptionHome: pDescriptionHome ? pDescriptionHome.textContent : ''
    };
};

export const extractParagraphById = (htmlString: string, paragraphId: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');

    const paragraph = doc.getElementById(paragraphId);

    return paragraph ? paragraph.textContent : '';
};