import { parse } from 'node-html-parser';

export const extractTextContent = (htmlString: string) => {
    const root = parse(htmlString);
    return root.textContent;
};

export const parseHtmlContent = (htmlString: string) => {
    const root = parse(htmlString);

    const h1 = root.querySelector('h1');
    const h2 = root.querySelector('h2');
    const h3 = root.querySelector('h3');
    const taglineP = root.querySelector('p');
    const pDescriptionHome = root.querySelector('p.description-home');

    return {
        h1Content: h1 ? h1.textContent : '',
        h2Content: h2 ? h2.textContent : '',
        taglineH3: h3 ? h3.textContent : '',
        taglineP: taglineP ? taglineP.textContent : '',
        pDescriptionHome: pDescriptionHome ? pDescriptionHome.textContent : ''
    };
};

export const extractParagraphById = (htmlString: string, paragraphId: string) => {
    const root = parse(htmlString);
    const paragraph = root.querySelector(`#${paragraphId}`);

    return paragraph ? paragraph.textContent : '';
};