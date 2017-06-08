import addJsonElemDL from '../components/addJsonElemDL.js';
import assignClassElemDL from '../components/assignClassElemDL.js';

function getJson() {
  fetch('sections.json')
  .then(response => response.json())
  .then(infoJson => {
    const pos = Math.round(Math.random() * (infoJson.length - 1))
    const { title, content } = infoJson[pos]
    addJsonElemDL(title, content)
    assignClassElemDL();
  })
  .catch(error => console.log(error))
}

module.exports = getJson
