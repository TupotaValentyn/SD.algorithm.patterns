export const createHtmlNode = ({node, attr}) => {
    return new DOMParser()
        .parseFromString(node, 'text/html')
        .querySelector(`[${attr}]`)
};

export const portalRender = (parent, child) => {
    parent.appendChild(child);
};

export const createFragment = (HTMLText) => {
    return document.createRange().createContextualFragment(HTMLText);
};
