export default () => {
  // BEGIN
    const button = document.getElementById('alert-generator');
    const mainDiv = document.querySelector('.alerts');
    let counter = 1;
    button.addEventListener('click', () => {
        const div = document.createElement('div');
        div.classList.add('alert', 'alert-primary');
        div.textContent = "Alert " + String(counter);
        mainDiv.insertBefore(div, mainDiv.firstChild);
        counter++;
    })
  // END
};