function entityExtract() {
	const articleURL = document.getElementById("url").value;
	const articleText = document.getElementById("text").value;
	if (articleURL !== "") {
		Client.postData("/extractEntityUrl", {
			url: articleURL
		}) 
		.then(function()
		{
			Client.updateUI();
		})
	} else if (articleText !== "") {
		Client.postData("/extractEntityText", {
			text: articleText,
		}) 
		.then(function() {
			Client.updateUI();
		}) 
	} else {
			window.alert("Something went wrong!");
	}

}

export { entityExtract }