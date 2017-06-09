function getJson(dataJson, fileJson) {
	const promise = new Promise(function (resolve, reject) {
	  fetch(fileJson)
	  .then(response => response.json())
	  .then(infoJson => {
	    const pos = Math.round(Math.random() * (infoJson.length - 1))
	    const { title, content } = infoJson[pos]
	    dataJson.push(title)
	    dataJson.push(content)
	    resolve(dataJson)
	  })
	  .catch(error => alert('Not find or error in file Json name = "' + fileJson +'"' ))
	})
	return promise
}

module.exports = getJson
