function handleSubmit(event) {
    event.preventDefault()
    
    

    // check what text was put into the form field
    Client.generateWeather();
}
 export {handleSubmit}