const postData = async (url = '', data={}) => {
	const req = await fetch(url, {
		method: 'POST',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json;charset=UTF-8'
		},
		body: JSON.stringify({
			date: data.date,
			temp: data.temp,
			comments: data.comments
		})
	});

	try{
		const newData = await req.json();
		return newData;
	}

	catch(error){
		console.log("error: " + error);
	}
};
export {postData}