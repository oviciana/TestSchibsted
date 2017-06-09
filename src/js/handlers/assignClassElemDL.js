function assignClassElemDL(classNameDT, classNameDD) {
  const elements = document.querySelectorAll('dt');
  Array.from(elements).map(elem => {
      elem.className = classNameDT;
      elem.nextElementSibling.className = classNameDD;
  })
}

module.exports = assignClassElemDL;