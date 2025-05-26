import 'whatwg-fetch';

export default () => {
  // BEGIN
  const host = window.location.origin;
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
      input.addEventListener('input', async (e) => {
          const autocomplete = input.dataset.autocompleteName;
          const api = input.dataset.autocomplete;
          const list = document.querySelector('ul[data-autocomplete-name=' + autocomplete + ']')
          list.innerHTML = '';
          const url = new URL(api, host);
          url.searchParams.set('search', e.target.value);
          const response = await fetch(url);
          const data = await response.json();
          if (data.length > 0) {
              data.forEach(item => {
                  const li = document.createElement('li');
                  li.textContent = item;
                  list.append(li);
              });
          } else {
              list.innerHTML = '<li>Nothing</li>';
          }
      })
  })
  // END
};
