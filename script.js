// Modal creation
function openModal(maxWidth, content) {
  // for backdrop
  const backdrop = document.createElement('div');
  backdrop.classList.add('modal--backdrop');
  document.body.appendChild(backdrop);

  // create and append modal
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.style.maxWidth = maxWidth;
  modal.innerHTML = content;
  document.body.appendChild(modal);

  // close modal when backdrop or close button is clicked
  backdrop.addEventListener('click', closeModal);
  modal.querySelector('#closeModalBtn').addEventListener('click', closeModal);

  // show modal and backdrop
  backdrop.style.display = 'block';
  modal.style.display = 'block';
}

// close the modal
function closeModal() {
  const backdrop = document.querySelector('.modal--backdrop');
  const modal = document.querySelector('.modal');

  document.body.removeChild(backdrop);
  document.body.removeChild(modal);
}


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

function openScreen3Modal(val) {
  openModal(
    "600px",
    `
    <div class="d--flex justify--flex-end pe--3 pt--3" id="closeModalBtn">
    <h1 class="text--gray">X</h1>
    </div>
    <div class="flex--row d--flex align--center ps--4 pe--4 pb--5">
        <span class="badge text--white font--bold me--3">3</span>
        <p class="mb--0">Which <b>${val}</b> issue(s) apply to your case?</p>
    </div>
    <div class="row justify--center ps--5 pe--5 pb--6">
      <div class="col__md--6 col__sm--12">
        <div class="pb--4 d--flex align--center">
          <input type="checkbox" id="checkbox1" class="me--3">
          <label class="font--bold font-size--sm" for="checkbox1">Adoptions</label>
        </div>
        <div class="pb--4 d--flex align--center">
          <input type="checkbox" id="checkbox2" class="me--3">
          <label class="font--bold font-size--sm" for="checkbox2">Guardianship</label>
        </div>
        <div class="pb--4 d--flex align--center">
          <input type="checkbox" id="checkbox3" class="me--3">
          <label class="font--bold font-size--sm" for="checkbox3">Child Custody and Visitation</label>
        </div>
        <div class="pb--4 d--flex align--center">
          <input type="checkbox" id="checkbox4" class="me--3">
          <label class="font--bold font-size--sm" for="checkbox4">Paternity</label>
        </div>
      </div>
      <div class="col__md--6 col__sm--12">
        <div class="pb--4 d--flex align--center">
          <input type="checkbox" id="checkbox5" class="me--3">
          <label class="font--bold font-size--sm" for="checkbox5">Child Support</label>
        </div>
        <div class="pb--4 d--flex align--center">
          <input type="checkbox" id="checkbox6" class="me--3">
          <label class="font--bold font-size--sm" for="checkbox6">Separations</label>
        </div>
        <div class="pb--4 d--flex align--center">
          <input type="checkbox" id="checkbox7" class="me--3">
          <label class="font--bold font-size--sm" for="checkbox7">Divorce</label>
        </div>
        <div class="pb--4 d--flex align--center">
          <input type="checkbox" id="checkbox8" class="me--3">
          <label class="font--bold font-size--sm" for="checkbox8">Spousal Support or Alimony</label>
        </div>
      </div>
      <div class="d--flex flex--row justify--center align--center pt--5">
         <button class="button--primary text--white font--bold">FIND A LAWYER NOW</button>
      </div>
    </div>
    `,
  )
}

const categoryInput = document.getElementById('categoryInput')
categoryList.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        categoryInput.textContent = event.target.textContent;
        categoryInput.style.color = '#000000'
        hideCategory()
        openScreen3Modal(event.target.textContent)
    }
});

const openScreen5Modal = document.getElementById('openScreen5Modal');
openScreen5Modal.addEventListener('click', function() {

});
