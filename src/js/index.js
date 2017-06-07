window.onload = () => {
	getJson();

  document.onclick = function(selElem) {
    const elemClicked = selElem.target;
    if (elemClicked.nodeName === 'DT') {
      assignClassElemDL();
      elemClicked.nextElementSibling.className = 'TestAccordion-elemDD--active';
    }
  }

  function getJson() {
		fetch('sections.json')
		.then(response => response.json())
		.then(infoJson => {
			const pos = Math.round(Math.random() * (infoJson.length - 1))
			const {title, content} = infoJson[pos]
			addJsonElemDL(title,content)
			assignClassElemDL();
		})
    .catch(error => console.log(error))
  }  
	
  function addJsonElemDL(newSection, newContent) {
		var nodeElems = document.querySelector('.TestAccordion');
    var newDT = document.createElement("dt");
    var textDT = document.createTextNode(newSection);
    newDT.appendChild(textDT);
    nodeElems.appendChild(newDT);

    var newDD = document.createElement("dd");
    var newP = document.createElement("p");
    var textP = document.createTextNode(newContent);
    newP.appendChild(textP);
    newDD.appendChild(newP);
    nodeElems.appendChild(newDD);
  }

  function assignClassElemDL() {
  	const elements = document.querySelectorAll('dt');
  	Array.from(elements).map(elem => {
    	elem.className = 'TestAccordion-elemDT';
    	elem.nextElementSibling.className = 'TestAccordion-elemDD';
  	})
  }
}
