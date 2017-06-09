function addJsonElemDL(newSection, newContent, classNameDL) {
  var nodeElems = document.querySelector(classNameDL);
  var newDT = document.createElement("dt");
  const textDT = document.createTextNode(newSection);
  newDT.appendChild(textDT);
  
  nodeElems.appendChild(newDT);

  var newDD = document.createElement("dd");
  var newP = document.createElement("p");
  const textP = document.createTextNode(newContent);
  newP.appendChild(textP);
  newDD.appendChild(newP);
  
  nodeElems.appendChild(newDD);
}

module.exports = addJsonElemDL