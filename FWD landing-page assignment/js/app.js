/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const sections = document.querySelectorAll('section'); // select all sections tags "sections is an array"
const navbarMenu = document.getElementById('navbar__list'); // *** get '<ul></ul>' by ID  and store it in a varible
// *** empty arrays
const gettedAtribute = [];
const gettedAtributeId = []; // *** this was for scroll by using "href" changed to' data-link'

// *** build the nav

for (let i = 0; i < sections.length; i++) { // *** this for loop to create number of <li> <a>[text]</a> </li>
  const li = document.createElement('LI'); // *** creating number of <li> </li> and stored it into a li Variable
  const a = document.createElement('A'); // *** creating number of <a> </a> and stored it into a a Variable

  navbarMenu.appendChild(li); // *** adding li items that i created to the page in <ul> </ul> " having navbar__list class "
  li.appendChild(a); // *** adding a items that i created to the page in <li> </li> " "
  a.classList.add('menu__link'); // *** adding menu__link class to the links <a> </a>
}

// *** these Variables are Global after creating them
const allLi = document.querySelectorAll('li'); // *** All <li> </li>
const allA = document.querySelectorAll('a'); // *** All <a> </a>
allA[0].classList.add('active'); // *** adding class 'active to 1st link'

// *** this forEach for getting the data-nav,id Attributes and store them in an two arrays

sections.forEach((section, index, array) => {
  gettedAtribute.push(section.getAttribute('data-nav'));
  gettedAtributeId.push(section.getAttribute('id')); //  *** this was for scroll by using  "href" changed to data-link
});


// *** this forEach for  adding array content above to <a> </a> and ['href attributes'changed to 'data-link' ]
allA.forEach((a, index, array) => {
  a.textContent = gettedAtribute[index];
  // a.setAttribute('href', '#' + gettedAtributeId[index]); //  *** this was for scroll by using 'href'
  a.setAttribute('data-link', gettedAtributeId[index]); //  *** this was for scroll by using data-link

  a.setAttribute('data-nav', gettedAtribute[index]);

});
// *** when excute scroll event add active classes to sections 'your-active-class' and 'active' to links

window.addEventListener('scroll', function addingActiveClass() {
  let currentSection = '';
  sections.forEach(section => {
    const sectionHeight = section.clientHeight; // *** determine the height of the section : clientHeight property returns the viewable height of an element in pixels
    const sectionTop = section.offsetTop; // *** offsetTop caclute How much far the section from the top
    // *** pageYOffset property determine the position of your place in the page
    if (pageYOffset >= (sectionTop - sectionHeight / 1.5)) { // *** this condition determine the section that you are in
      currentSection = section.getAttribute('data-nav'); // ***  geting the data-nav Attribute of the section that you are in
    }
  });
  // *** adding active class to the sections
  sections.forEach(section => {
    section.classList.remove('your-active-class'); // *** remove the active class from the section
    if (section.getAttribute('data-nav') == currentSection) { // *** this condition if the section that you are in contains the same data-nav attribute
      section.classList.add('your-active-class'); // *** if the condition is true add the active class to the section : the name class is 'your-active-class'
    }
  });

  // *** adding active class to the links
  allA.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('data-nav') == currentSection) {
      a.classList.add('active');
    }
  });
});



// *** the nodified codes for scrolling between sections without href attribute

allA.forEach((a, index, array) => {

  a.addEventListener('click', function getClicked() { // *** when cliking on any <a> </a> element
    const el = document.getElementById(a.getAttribute('data-link'));
    el.scrollIntoView({
      behavior: 'smooth', // *** for scrolling smoothly
    });
  })
});
