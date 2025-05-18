export default () => {
  // BEGIN
  const buttons = document.querySelectorAll('[data-bs-toggle]');
  buttons.forEach(button => {
      button.addEventListener('click', () => {
          if (button.classList.contains('active') === false) {
              const activeElements = document.querySelectorAll('.active');
              activeElements.forEach(activeElement => {
                  if (activeElement.dataset.bsToggle === button.dataset.bsToggle) {
                      activeElement.classList.remove('active');
                      const sameIDActiveElement = document.querySelector(activeElement.dataset.bsTarget);
                      sameIDActiveElement.classList.remove('active');
                  }
              })
              button.classList.add('active');
              const sameIDDiv = document.querySelector(button.dataset.bsTarget);
              sameIDDiv.classList.add('active');
          }
      })
  })
  // END
};
