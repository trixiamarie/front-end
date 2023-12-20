//FETCH

// let URL= "https://api.pexels.com/v1/search?query=cat";
function setImages(photo) {
    let imgElements = document.querySelectorAll('.bd-placeholder-img');
    imgElements.forEach((imgElement, index) => {
      if (photo[index]) {
        let imageUrl = photo[index].src.large;
        imgElement.src = imageUrl;
        let imageAlt = photo[index].alt;
        imgElement.alt = imageAlt;
      }
    });
    let description = document.querySelectorAll('small.text-muted');
    description.forEach((description, index) => {
        if (photo[index]) {
            let id = JSON.parse(photo[index].id);
        console.log(id);
        description.innerText = id;
        }
    });
    let title = document.querySelectorAll('h5.card-title');
    title.forEach((title, index) => {
        if (photo[index]) {
        title.innerText = photo[index].alt;
        }
    });
    let p = document.querySelectorAll('p.card-text');
    p.forEach((p, index) => {
        if (photo[index]) {
        p.innerText = "Photo by: "+ photo[index].photographer +", "+ photo[index].photographer_id;
        }
    });
  }
  
  let photo;
  let photo2;
  let photo3;
  
  fetch("https://api.pexels.com/v1/search?query=cat", {
    method: 'GET',
    headers: {
      Authorization: 'PZQT2lvAFw0wvj4KrO2iAJvinMMa9Cs9Rg6pRdPwMFD60VhnwwNvWoDp'
    }
  })
    .then(response => response.json())
    .then(data => {
      photo = data.photos;
      console.log(photo);
    })
    .catch(error => console.error('Error:', error));
  
  let btn1 = document.querySelector('#btn1');
  btn1.addEventListener('click', function() {
    setImages(photo);
  });
  
  fetch("https://api.pexels.com/v1/search?query=dog", {
    method: 'GET',
    headers: {
      Authorization: 'PZQT2lvAFw0wvj4KrO2iAJvinMMa9Cs9Rg6pRdPwMFD60VhnwwNvWoDp'
    }
  })
    .then(response => response.json())
    .then(data => {
      photo2 = data.photos;
      console.log(photo2);
    })
    .catch(error => console.error('Error:', error));
  
let btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', function() {
    setImages(photo2);
});
  
let btnHides = document.querySelectorAll('.hideit');

btnHides.forEach(btnHide => {
  btnHide.addEventListener('click', function() {
    let card = this.closest('.card');
    if (card) {
      card.remove();
    }
  });
});

let input = document.querySelector('input');
let searchIcon = document.querySelector('.bi.bi-search');

async function fetchData() {
    let inputValue = input.value;
    await fetch(`https://api.pexels.com/v1/search?query=${inputValue}`, {
        method: 'GET',
        headers: {
          Authorization: 'PZQT2lvAFw0wvj4KrO2iAJvinMMa9Cs9Rg6pRdPwMFD60VhnwwNvWoDp'
        }
      })
      .then(response => response.json())
      .then(data => {
        photo3 = data.photos;
        console.log(photo3);
      })
      .catch(error => console.error('Error:', error));
}


searchIcon.addEventListener('click', async function() {
   await fetchData();
   setImages(photo3);
});

input.addEventListener('keydown', async function(event) {
  if (event.code === 'Enter') {
    await fetchData();
    setImages(photo3);
  }
});



let linkDetail = document.querySelectorAll('main a');


linkDetail.forEach(function(element, index) {
  element.addEventListener('click', function() {
    
  });
});




    