
// for input glow
const input = document.querySelector('.input input');
const container = document.querySelector('.input');

input.addEventListener('focus', () => {
  container.classList.add('focused');
});

input.addEventListener('blur', () => {
  container.classList.remove('focused');
});


// for select zipcode input
const inputid = document.getElementById('textInputSelect');
const optionsList = document.getElementById('optionsList');

inputid.addEventListener('input', function(event) {
  const value = event.target.value.trim();
  
  if (value === '00000') {
    showOptions();
  } else {
    hideOptions();
  }
});


optionsList.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
      input.value = event.target.textContent;
      hideOptions()
    }
});


function showOptions() {
    optionsList.innerHTML = '';

    const options = ['Nowheresville, XX, '];
    const value = inputid.value;

    options.forEach(option => {
        const li = document.createElement('li');
        li.classList.add('ps--4', 'pe--4', 'pb--3', 'pt--3');
        const span = document.createElement('span');
        span.classList.add('text--light-primary');
        span.textContent = value;
        const textNode = document.createTextNode(options);
        li.appendChild(textNode);
        li.appendChild(span);
        optionsList.appendChild(li);
    });

    optionsList.classList.remove('d--none');
}

function hideOptions() {
    optionsList.innerHTML = '';
    optionsList.classList.add('d--none');
}

// for select category input
const categoryid = document.getElementById('categoryDiv');
const categoryList = document.getElementById('categoryList');
let bool = true

categoryid.addEventListener('click', function() {
    if (bool) {
        showCategory()
        bool = false
    } else {
        hideCategory()
        bool = true
    }
});

function showCategory() {
    categoryid.classList.add('focused');
    categoryList.innerHTML = '';

    const options = ['Family', 'Criminal Defense', 'Business', 'Personal Injury', 'Bankruptcy & Finances', 'Products & Services', 'Employment', 'Real Estate', 'Immigration', 'Wills, Trusts, & Estates', 'Government', 'Intellectual Property'];

    options.forEach(option => {
        const li = document.createElement('li');
        li.classList.add('category__options--li');
        li.textContent = option
        categoryList.appendChild(li);
    });

    categoryList.classList.remove('d--none');
}

function hideCategory() {
    categoryid.classList.remove('focused');
    categoryList.innerHTML = '';
    categoryList.classList.add('d--none');
}

const categoryInput = document.getElementById('categoryInput')
categoryList.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        categoryInput.textContent = event.target.textContent;
        categoryInput.style.color = '#000000'
        hideCategory()
    }
});