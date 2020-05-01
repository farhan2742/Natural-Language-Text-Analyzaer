function generateWeather(){
	const baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
	const zipCode = document.getElementById("zip").value;
    const apiKey = "&appid=432dd66cea586dad2ff84db02e649311";
    let d = new Date();
	let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

	const userComment = document.getElementById("feelings").value;
	Client.getWeatherData(baseURL,zipCode,apiKey)
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

export {generateWeather};