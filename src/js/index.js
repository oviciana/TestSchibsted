require('../scss/styles.scss');
import getJson from './services/getJson.js';
import assignClassElemDL from './components/assignClassElemDL.js';

window.onload = () => {
	getJson();

  document.onclick = function(selElem) {
    const elemClicked = selElem.target;
    if (elemClicked.nodeName === 'DT') {
      assignClassElemDL();
      elemClicked.nextElementSibling.className = 'TestAccordion-elemDD--active';
    }
  }
}