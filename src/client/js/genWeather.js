function generateCordinates(){
	const baseURL = "http://api.geonames.org/postalCodeSearch?";
	const placename = `placename=${document.getElementById("location").value}`;
    const apiKey = "&maxRows=1&username=farhan2742";
    let d = new Date();
	let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

	const userComment = document.getElementById("feelings").value;
	Client.getWeatherData(baseURL,placename,apiKey)
		.then(function (weatherData){
		Client.postData("/addData", {
		date: newDate,
		temp: weatherData.main.temp,
		comments: userComment
		})
	}) .then(function(){
		Client.updateUI();
	})
};

export {generateCordinates};