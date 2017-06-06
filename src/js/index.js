window.onload = () => {

  const elements = document.querySelectorAll('dt');

  addElemClass();

  document.onclick = function(selElem) {
    const elemClicked = selElem.target;
//    console.log("han pulsado click en " + elemClicked.nodeName)
    if (elemClicked.nodeName === 'DT') {
      addElemClass();
      elemClicked.nextElementSibling.className = 'TestAccordion-content--active';
    }
  }

  function addElemClass () {
  	Array.from(elements).map(elem => {
    	elem.className = 'TestAccordion-title';
    	elem.nextElementSibling.className = 'TestAccordion-content';
  	})
  }

}
