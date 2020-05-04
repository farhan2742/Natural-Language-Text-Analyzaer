const getWeatherData = async (URL, zip, key) => {

	const res = await fetch(URL+zip+key)

	try{
		var weatherData = await res.json();
		return weatherData;
	}
	catch(error){
		console.log("error: " + error);
	}
};

export {getWeatherData};