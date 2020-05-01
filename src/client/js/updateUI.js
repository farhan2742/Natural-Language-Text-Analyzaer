const updateUI = async () => {
	const request = await fetch("/all");
	try {
		const serverData = await request.json();
		const dateDiv = document.getElementById("date");
		const tempDiv = document.getElementById("temp");
		const commentDiv = document.getElementById("content");
		dateDiv.innerText = serverData.date;
		tempDiv.innerText = serverData.temp;
		commentDiv.innerText = serverData.comments;
	} catch(error) {
		console.log("error:" + error);
	}
};

export {updateUI}