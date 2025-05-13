// BEGIN
const extractData = (DOM) => {
    const body = DOM.querySelector('body');
    const list = Array.from(body.childNodes);
    const paragraphs = list.filter((el) => el.tagName === 'p' || el.tagName === 'P');
    const data = [];
    paragraphs.forEach(paragraph => data.push(paragraph.textContent.trim()));
    return data;
}
export default extractData;
// END