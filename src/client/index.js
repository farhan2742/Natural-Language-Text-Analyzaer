import {handleSubmit} from './js/formHandler';
import { getWeatherData} from './js/getWeather';
import { postData } from './js/postData';
import { updateUI } from './js/updateUI';
import { generateWeather } from './js/genWeather';
import { buildMenu } from './js/buildMenu'
import { notScrolling } from './js/notScrolling'

import './styles/styles.scss'
//import $ from 'jquery';
//import 'jquery/dist/jquery.slim.min.js'
//import 'popper.js/dist/popper.min.js';
//import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './imgs/logo.png'


export {
	handleSubmit,
	getWeatherData,
	postData,
	updateUI,
	generateWeather,
	buildMenu
}

function run(){

	$("#page__header").resize(function () {
        $('#godown').height($("#page__header").height() + 10);
    });

    if ($("#page__header").height() > $('#godown').height()) $('#godown').height($("#page__header").height() + 10);

	const navList = document.querySelector("#navbar__list");


// build the nav

	buildMenu();

	// Add class 'active' to section when near top of viewport


	// Scroll to anchor ID using scrollTO event

	navList.addEventListener("click", function(event) {
		event.preventDefault();
		const clicked = event.target;
		const ScrollToElement = document.querySelector(clicked.getAttribute("href"));
	  	ScrollToElement.scrollIntoView({block: 'end', behavior: 'smooth'})}
	  	);
}

	// hide menu bar if scrolling stoped


	notScrolling(function(){
		const pageHeader = document.querySelector("#page__header");
		pageHeader.classList.add("d-none");
		window.addEventListener("scroll", function(){
			pageHeader.classList.remove("d-none");
		});
	})


	// API call

	const formSubmit = document.getElementById('submit');
	formSubmit.addEventListener('click',function (event) {
		const formValidation = document.querySelectorAll('.check__validation');
		let formValid = true;
		for (var i = 0; i < formValidation.length; i++) {
			formValidation[i].checkValidity();
			formValidation[i].reportValidity();
			if (formValidation[i].checkValidity() === false) {
				formValid = false;
			}
			if (formValid === true) {
				event.preventDefault();
				handleSubmit();
			}
		}	
	});

document.addEventListener("DOMContentLoaded",run());