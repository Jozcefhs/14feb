

const container = document.getElementById('container')
let exEl = document.getElementById('old')
let createBtn = document.getElementById('create')
let createBtn1 = document.getElementById('create')

createBtn.addEventListener('dblclick', function () {
    closePopup()
    openPopup1()
})
createBtn1.addEventListener('click', function () {
    openPopup()
})

let pressTimer;
let messa = document.getElementById('create')

messa.addEventListener('touchstart', function (e) {
    pressTimer = setTimeout(function () {
      openPop()
      closePopup()
      closePopup1()
  }, 1500)
})

messa.addEventListener('touchend', function () {
  clearTimeout(pressTimer);
})

   




function createNew (){
    const newCreatedParentEl = document.createElement('div')
    newCreatedParentEl.setAttribute('class', 'menu-item')
    newCreatedParentEl.setAttribute('id', 'createParent')
    //newCreatedParentEl.innerHTML = 'This is the time'

    const span1 = document.createElement('span')
    const span2 = document.createElement('span')
    const span3 = document.createElement('span')
    const ancEl = document.createElement('a')

    // ancEl.setAttribute('href', '#subject-popup')
    // ancEl.setAttribute('data-tool-tip', 'More Actions')
    span1.setAttribute('class', 'option')
    span2.setAttribute('class', 'icon')
    span2.setAttribute('id', 'create')
    span3.setAttribute('class', 'label')
    span1.innerHTML = "&#x2026"
    span2.innerHTML = ""


    const selectedOption = document.getElementById('subject-list');
    
    // span1.innerHTML = selectedOption.innerHTML; // Set dynamic content for span1
    // span2.innerHTML = selectedOption.innerHTML; // Set dynamic content for span2
    span3.innerHTML = selectedOption.value; // Set dynamic content for span3
    // if (span3.innerHTML == "mathematics"){
    //   span2.innerHTML = "&#x1F4D3"
    // }
    switch(span3.innerHTML){
      case "Agricultural Science":
        span2.innerHTML = "&#x1F331";
        break;
      case "Basic Science":
        span2.innerHTML = "&#x1F52C";
        break;
      case "Basic Technology":
        span2.innerHTML = "&#x1F4E1";
        break;
      case "Biology":
        span2.innerHTML = "&#x1F9A0";
        break;
      case "Business Studies":
        span2.innerHTML = "&#x1F4BC";
        break;
      case "Catering Craft Practice":
        span2.innerHTML = "&#x1F373";
        break;
      case "Chemistry":
        span2.innerHTML = "&#x1F9EA";
        break;
      case "Christian Religious Studies":
        span2.innerHTML = "&#x26EA";
        break;
      case "Civic Education":
        span2.innerHTML = "&#x1F5F3";
        break;
      case "Commerce":
        span2.innerHTML = "&#x1F4CA";
        break;
      case "Computer Studies":
        span2.innerHTML = "&#x1F5A5";
        break;
      case "Cultural and Creative Arts":
        span2.innerHTML = "&#x1F3AD";
        break;
      case "Economics":
        span2.innerHTML = "&#x1F3E6";
        break;
      case "English Language":
        span2.innerHTML = "&#x1F4D6";
        break;
      case "Financial Accounting":
        span2.innerHTML = "&#x1F4B0";
        break;
      case "Fisheries":
        span2.innerHTML = "&#x1F41F";
        break;
      case "Foods and Nutrition":
        span2.innerHTML = "&#x1F957";
        break;
      case "French Language":
        span2.innerHTML = "&#x1F5E3";
        break;
      case "Further Mathematics":
        span2.innerHTML = "&#x1F4C8";
        break;
      case "Geography":
        span2.innerHTML = "&#x1F5FA";
        break;
      case "Government":
        span2.innerHTML = "&#x1F5FD";
        break;
      case "Hausa Language":
        span2.innerHTML = "&#x1F4AC";
        break;
      case "History":
        span2.innerHTML = "&#x1F3FA";
        break;
      case "Home Economics":
        span2.innerHTML = "&#x1F9FA";
        break;
      case "Literature-In-English":
        span2.innerHTML = "&#x1F4DD";
        break;
      case "Mathematics":
        span2.innerHTML = "&#x1F9EE";
        break;
      case "Marketing":
        span2.innerHTML = "&#x1F4E2";
        break;
      case "Music":
        span2.innerHTML = "&#x1F3B5";
        break;
      case "Physics":
        span2.innerHTML = "&#x1F30C";
        break;
      case "Physical and Health Education":
        span2.innerHTML = "&#x1F6B4";
        break;
      case "Social Studies":
        span2.innerHTML = "&#x1F46A";
        break;
      case "Technical Drawing":
        span2.innerHTML = "&#x1F4D0";
        break;
      case "Tourism":
        span2.innerHTML = "&#x1F3D6";
        break;
      case "Visual Arts":
        span2.innerHTML = "&#x1F3A8";
        break;
      default:
        span2.innerHTML = "&#x2753"
    }

    
    span2.setAttribute('onclick', 'openPopup1()')
    span2.setAttribute('ondblclick', 'closePopup1(); openPop()')

    // span1.append(ancEl)
    ancEl.append(span1)
    newCreatedParentEl.append(ancEl)
    newCreatedParentEl.append(span2)
    newCreatedParentEl.append(span3)

    const ner = document.createElement('div')
    const ner1 = document.createElement('div')
    const ner2 = document.createElement('div')
    const ner3 = document.createElement('div')

    ner.setAttribute('class', 'pop')
    ner.setAttribute('id', 'pop')
    ner1.setAttribute('class', 'peep')
    ner2.setAttribute('class', 'peep')
    ner3.setAttribute('class', 'peep')
    ner1.setAttribute('id', 'popedit')
    ner2.setAttribute('id', 'popdel')
    ner3.setAttribute('id', 'popcancel')

    const ner1a =document.createElement('span')
    const ner2a =document.createElement('span')
    const ner3a =document.createElement('span')
    ner1a.textContent = '&#x1F58A;'
    ner2a.textContent = '&#x1F5D1;'
    ner3a.textContent = '&#x26D4;'

    ner1.append(ner1a)
    ner2.append(ner2a)
    ner3.append(ner3a)

    ner.append(ner1)
    ner.append(ner2)
    ner.append(ner3)

    container.append(ner)

    container.insertBefore(newCreatedParentEl, exEl)
    return newCreatedParentEl.outerHTML
}


function saveToLocalStorage (key, value) {
  localStorage.setItem(key, value)
}

function loadFromLocalStorage() {
  for (const [k, v] of Object.entries(localStorage)) {
    container.insertAdjacentHTML('afterbegin', v)

  }
}


// Example of how to use these functions with a select element
const selectElement = document.getElementById('subject-list');

selectElement.addEventListener('change', function() {
    const selectedValue = createNew();
    const selectedKey = 'prefix' + selectedValue;
    saveToLocalStorage(selectedKey, selectedValue);
    createNew();
    closePopup()
    location.reload()
    activateFullScreen()
});

let createsub = document.getElementById('createsub')
  let createsub1 = document.getElementById('createsub1')
  
  createsub.addEventListener('click', function (){
      closePopup()
    })
    
    let subjectpopup = document.getElementById('subject-popup')
    
    function openPopup (){
        subjectpopup.classList.add('open-subject-popup')
    }
    
    function closePopup (){
       subjectpopup.classList.remove('open-subject-popup')
    }
  let createsub2 = document.getElementById('createsub2')
  let createsub3 = document.getElementById('createsub3')
  
  createsub2.addEventListener('click', function (){
      closePopup1()
    })

    createsub3.addEventListener('click', function (){
        const newElem1 = createNew();
        // console.log('From createsub1: ', newCreatedParentEl)
        saveToLocalStorage(newElem1)
        closePopup1()
    })
    
    let featurepopup = document.getElementById('subject-popup1')
    
    
    function openPopup1 (){
        featurepopup.classList.add('open-subject-popup1')
    }
    
    function closePopup1 (){
        featurepopup.classList.remove('open-subject-popup1')
    }


    const openpop = document.getElementById('pop')
      const met = document.getElementById('popcancel' )
      
      function openPop (){
        openpop.classList.add('openpop')
      }
      function closePop (){
        openpop.classList.remove('openpop')
      }
      
      met.addEventListener('click', function(){
        closePop()
        activateFullScreen()
      })

      // Call enterFullscreen function when the page loads
document.addEventListener("DOMContentLoaded", function () {
    activateFullScreen();
});

      
      window.onload = loadFromLocalStorage
      
      document.addEventListener('fullscreenchange', (event) => {
        if(!document.fullscreenElement){

          activateFullScreen();
        }
    })
    let fullscreen = document.getElementById('fullscreen')
    
    function activateFullScreen () {
      if(fullscreen.requestFullscreen){
        fullscreen.requestFullscreen()
      }
    }
    
    document.addEventListener("DOMContentLoaded", function () {
      activateFullScreen()
  });
    
 


