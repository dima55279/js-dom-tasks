export default (document) => {
  // BEGIN
    const data = {};
    const page = document.querySelector('.content');
    data.title = page.querySelector('h1').textContent;
    data.description = page.querySelector('.description').textContent;
    data.items = []
    const linksChildren = page.querySelectorAll('.links > div');
    linksChildren.forEach(item => {
        const title = item.querySelector('a').textContent;
        const description = item.querySelector('p').textContent;
        data.items.push({title: title, description: description});
    })
    return data;
  // END
};
