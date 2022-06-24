const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let lastChecked = null;

for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].setAttribute('newId', i);
}

for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener('click', function (e) {
    if (lastChecked && e.shiftKey) {
      let low = lastChecked.getAttribute('newId');
      let high = e.target.getAttribute('newId');
      if (low > high) [low, high] = [high, low];
      for (let i = low; i <= high; i++)
        checkboxes[i].checked = e.target.checked;
    }
    lastChecked = this;
  });
}
