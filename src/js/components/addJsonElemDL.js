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

module.exports = addJsonElemDL