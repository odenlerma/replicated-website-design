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
  const modals = modal.querySelectorAll('#closeModalBtn')

  modals.forEach(m => {
    m.addEventListener('click', closeModal);
  })

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
  fetch('./modal/modal-screen3.html')
  .then(response => response.text())
  .then(htmlContent => {
    openModal("600px", htmlContent);
    const categoryValue = document.getElementById('categoryValue');
    categoryValue.textContent = val;
  })
  .catch(error => {
    console.error('Error fetching content:', error);
  });
}

const categoryInput = document.getElementById('categoryInput')
categoryList.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        categoryInput.textContent = event.target.textContent;
        hideCategory()
        openScreen3Modal(event.target.textContent)
    }
});


const openScreen4Modals = document.querySelectorAll('#openScreen4Modal');
openScreen4Modals.forEach(openScreen4Modal => {
  openScreen4Modal.addEventListener('click', function(event) {
    fetch('./modal/modal-screen4.html')
    .then(response => response.text())
    .then(htmlContent => {
      openModal("600px", htmlContent);
      
      //evaluation list
      const evalList = document.getElementById('evaluationList');
      evalList.innerHTML = '';

      const evaloptions = [
        {
          title: 'Overall',
          stars: 5,
        },
        {
          title: 'Responded in a timely manner',
          stars: 4,
        },
        {
          title: 'Answered questions clearly',
          stars: 5,
        },
        {
          title: 'Understood Needs',
          stars: 4,
        },
        {
          title: 'Gave complete and clear information',
          stars: 5,
        },
        {
          title: 'Knowledgeable in legal area',
          stars: 4,
        },
        {
          title: 'Good value for money',
          stars: 5,
        },
        {
          title: 'Would hire again',
          stars: 4,
        },
        {
          title: 'Would recommend to friend',
          stars: 5,
        },

      ];

      evaloptions.forEach((option , index) => {
          const evalDiv = document.createElement('div');
          evalDiv.classList.add('row', 'justify--center', 'align--center');
          evalDiv.innerHTML = `
            <div class="col__md--9 font-size--sm">
                <p class=${index == 0 ? 'font--bold mb--0' : 'mb--0'}>${option.title}</p>
            </div>
          `

          const stardiv = document.createElement('div')
          stardiv.classList.add('col__md--3')

          for (let i = 0; i < 5; i++) {
            const star = document.createElement('span')
            star.textContent = "★"
            let starclass = i < option.stars ? "text--warning" : "text--dark-gray";
            star.classList.add(starclass, 'modal-screen4__star')
            stardiv.appendChild(star)
          }

          evalDiv.appendChild(stardiv)
          evalList.appendChild(evalDiv);
      });

    })
    .catch(error => {
      console.error('Error fetching content:', error);
    });
  });
});


const openScreen5Modal = document.getElementById('openScreen5Modal');
openScreen5Modal.addEventListener('click', function() {

});
