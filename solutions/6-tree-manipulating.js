// BEGIN
const prettify = (document) => {
    const divs = Array.from(document.getElementsByTagName('div'));
    divs.forEach((div) => {
        const children = div.childNodes;
        children.forEach((child) => {
            if (child instanceof Text)
            {
                if (child.textContent.includes("\n") === false)
                {
                    const text = child.textContent;
                    const p = document.createElement('p');
                    p.textContent = text;
                    child.replaceWith(p);
                }
            }
        })
    })
    return document;
}
export default prettify;
// END