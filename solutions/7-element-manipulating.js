import camelCase from 'lodash/camelCase';

// BEGIN
const normalize = (document) => {
    const elements = Array.from(document.body.getElementsByTagName('*'));
    elements.forEach(element => {
        const classList = element.classList;
        classList.forEach(oneClass => {
            classList.replace(oneClass, camelCase(oneClass));
        })
    })
    return document;
}
export default normalize;
// END