import escapeHtml from 'escape-html';

// BEGIN
const formHandler = () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const name = formData.get('name');
        const comment = formData.get('comment');
        const newBlock = document.createElement('div');
        newBlock.appendChild(document.createElement('p'));
        newBlock.lastChild.textContent = 'Feedback has been sent';
        newBlock.appendChild(document.createElement('div'));
        newBlock.lastChild.textContent = 'Email: ' + email;
        newBlock.appendChild(document.createElement('div'));
        newBlock.lastChild.textContent = 'Name: ' + name;
        newBlock.appendChild(document.createElement('div'));
        newBlock.lastChild.textContent = 'Comment: ' + comment;
        form.replaceWith(newBlock);
    });
}
export default formHandler;
// END