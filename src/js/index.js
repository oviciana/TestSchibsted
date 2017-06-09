require('../scss/styles.scss');
import getJson from './services/getJson.js';
import addJsonElemDL from './handlers/addJsonElemDL.js';
import assignClassElemDL from './handlers/assignClassElemDL.js';

window.onload = () => {
	const classNameDL = '.TestAccordion';
	const classNameDT = 'TestAccordion-elemDT';
	const classNameDD = 'TestAccordion-elemDD';
	const classNameActive = 'TestAccordion-elemDD--active'; 

	var dataJson = [];
	const fileJson = "sections.json";
	getJson(dataJson, fileJson)
		.then(function(){
 			addJsonElemDL(dataJson[0], dataJson[1], classNameDL);
 			assignClassElemDL(classNameDT, classNameDD);
		})
		.catch(assignClassElemDL(classNameDT, classNameDD));

  document.onclick = function(selElem) {
    const elemClicked = selElem.target;
    if (elemClicked.nodeName === 'DT') {
      assignClassElemDL(classNameDT, classNameDD);
      elemClicked.nextElementSibling.className = classNameActive;
    }
  }
}