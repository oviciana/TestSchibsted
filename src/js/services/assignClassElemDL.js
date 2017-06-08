function assignClassElemDL() {
  const elements = document.querySelectorAll('dt');
  Array.from(elements).map(elem => {
      elem.className = 'TestAccordion-elemDT';
      elem.nextElementSibling.className = 'TestAccordion-elemDD';
  })
}

module.exports = assignClassElemDL;